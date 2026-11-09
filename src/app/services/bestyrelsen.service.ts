import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IPerson } from '../model/IPerson';



@Injectable({
  providedIn: 'root',
})
export class BestyrelsenService {
  constructor(private http: HttpClient) {}

  getAllePersoner(): Observable<IPerson[]> {
    return this.http.get('data/personer.json').pipe(
      map((data) => {
        const personerArray: Array<IPerson> = [];

        for (const id in data) {
          if (data.hasOwnProperty(id)) {
            personerArray.push(data[id]);
          }
        }
        return personerArray;
      })
    );
  }
}
