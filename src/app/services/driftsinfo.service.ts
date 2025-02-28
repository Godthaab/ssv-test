import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { concatMap, map, tap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { convertSnaps } from './db-utils';
import { Driftsinfo } from '../model/driftsinfo';

@Injectable({
  providedIn: 'root',
})
export class DriftsinfoService {
  constructor(private db: AngularFirestore) {}
  opdaterInfo(infoId: string, changes: Partial<Driftsinfo>): Observable<any> {
    return from(this.db.doc(`driftsinfo/${infoId}`).update(changes));
  }

  loadInfoByCategory(vises: boolean): Observable<Driftsinfo[]> {
    return this.db
      .collection(
        'driftsinfo',
        (ref) => ref.where('vises', '==', vises).orderBy('publiceres', 'desc')
      )
      .get()
      .pipe(map((result) => convertSnaps<Driftsinfo>(result)));
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
            ...newCourse,
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
