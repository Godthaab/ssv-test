import { Tutorial } from 'src/app/model/tutorial';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { convertSnaps } from './db-utils';
import { Person } from '../model/person';


@Injectable({
  providedIn: 'root',
})
export class PersonerService {
  private dbPath = '/tutorials';
  tutorialsRef: AngularFirestoreCollection<Tutorial> = null;

  constructor(private db: AngularFirestore) {
    this.tutorialsRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Tutorial> {
    return this.tutorialsRef;
  }

  hentPersoner(): Observable<Person[]> {
    return this.db
      .collection('personer')
      .get()
      .pipe(map((result) => convertSnaps<Person>(result)));
  }
}
