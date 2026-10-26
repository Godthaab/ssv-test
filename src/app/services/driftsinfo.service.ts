import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { concatMap, map, shareReplay } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { convertSnaps } from './db-utils';
import { Driftsinfo, DriftsinfoCategories } from '../model/driftsinfo';
import { watchDriftsinfo, withLegacyVisibility } from './driftsinfo-status';

@Injectable({
  providedIn: 'root',
})
export class DriftsinfoService {
  private readonly infos$: Observable<DriftsinfoCategories>;

  constructor(private db: AngularFirestore) {
    const records$ = this.db.collection<Driftsinfo>(
      'driftsinfo', ref => ref.orderBy('publiceres', 'desc')
    ).valueChanges({ idField: 'id' });
    this.infos$ = watchDriftsinfo(records$).pipe(shareReplay({ bufferSize: 1, refCount: true }));
  }
  opdaterInfo(infoId: string, changes: Partial<Driftsinfo>): Observable<any> {
    return from(this.db.doc(`driftsinfo/${infoId}`).update(withLegacyVisibility(changes)));
  }

  loadInfoByCategory(current: boolean): Observable<Driftsinfo[]> {
    // Future timed posts are not displayed before their publication time.
    return this.infos$.pipe(map(infos => current ? infos.aktuelle : infos.tidligere));
  }

  // tslint:disable-next-line:typedef
  createCourse(newCourse: Partial<Driftsinfo>, infoId?: string) {
    return this.db
      .collection('driftsinfo', (ref) => ref.orderBy('infoNr', 'desc').limit(1))
      .get()
      .pipe(
        concatMap((result) => {
          const driftsinfos = convertSnaps<Driftsinfo>(result);

          const sidsteInfoNr = driftsinfos[0]?.infoNr ?? 0;

          const driftsinfo = {
            ...withLegacyVisibility(newCourse),
            infoNr: sidsteInfoNr + 1,
          };

          let save$: Observable<any>;

          if (infoId) {
            save$ = from(this.db.doc(`driftsinfo/${infoId}`).set(driftsinfo));
          } else {
            save$ = from(this.db.collection('driftsinfo').add(driftsinfo));
          }

          return save$.pipe(
            map((res) => {
              return {
                id: infoId ?? res.id,
                ...driftsinfo,
              };
            })
          );
        })
      );
  }

  // tslint:disable-next-line:typedef
  sletinfo(infoId: string) {
    return from(this.db.doc(`driftsinfo/${infoId}`).delete());
  }
}
