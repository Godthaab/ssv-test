import { AngularFirestore } from '@angular/fire/compat/firestore';
import { fakeAsync, tick } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Driftsinfo } from '../model/driftsinfo';
import { DriftsinfoService } from './driftsinfo.service';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

describe('Permanent and scheduled posts on the public website (no Firebase connection)', () => {
  const timestamp = (date: string) => firebase.firestore.Timestamp.fromDate(new Date(date));
  const record: Driftsinfo = {
    id: 'old', infoNr: 1, overskrift: 'Fast information', beskrivelse: 'Test',
    berorte: 'Alle', vises: true,
    publiceres: timestamp('2025-10-08T08:25:00+02:00'),
    aftages: timestamp('2024-09-24T09:17:00+02:00'),
  };
  let source: BehaviorSubject<Driftsinfo[]>;
  let service: DriftsinfoService;

  beforeEach(() => {
    source = new BehaviorSubject<Driftsinfo[]>([]);
    // Apply the actual query to in-memory records, including the date sort.
    const db = {
      collection: (_name: string, query: (ref: any) => any) => {
        let sortField: string;
        let direction: string;
        const ref = {
          orderBy: (field: string, order: string) => {
            sortField = field;
            direction = order;
            return ref;
          },
        };
        query(ref);
        return { valueChanges: () => source.pipe(map(infos => infos
          .filter(info => sortField in info)
          .sort((a, b) => (a[sortField].toMillis() - b[sortField].toMillis()) * (direction === 'desc' ? -1 : 1)))) };
      },
    };
    service = new DriftsinfoService(db as unknown as AngularFirestore);
  });

  it('preserves legacy posts with expired, reversed and future dates, newest first', fakeAsync(() => {
    const expired = { ...record, id: 'expired', aftages: timestamp('2025-10-09T08:25:00+02:00') };
    const future = { ...record, id: 'future', publiceres: timestamp('2030-01-01T10:00:00+01:00') };
    const hidden = { ...record, id: 'hidden', vises: false };
    source.next([record, expired, hidden, future]);
    let current: Driftsinfo[];
    let previous: Driftsinfo[];
    const a = service.loadInfoByCategory(true).subscribe(infos => current = infos);
    const b = service.loadInfoByCategory(false).subscribe(infos => previous = infos);
    tick(0);
    expect(current).toEqual([future, record, expired]);
    expect(previous).toEqual([hidden]);
    a.unsubscribe();
    b.unsubscribe();
  }));

  it('manually hides and restores a permanent post', fakeAsync(() => {
    source.next([record]);
    let current: Driftsinfo[];
    let previous: Driftsinfo[];
    const a = service.loadInfoByCategory(true).subscribe(infos => current = infos);
    const b = service.loadInfoByCategory(false).subscribe(infos => previous = infos);
    tick(0);
    expect(current).toEqual([record]);
    const hidden = { ...record, vises: false };
    source.next([hidden]);
    expect(current).toEqual([]);
    expect(previous).toEqual([hidden]);
    source.next([record]);
    expect(current).toEqual([record]);
    expect(previous).toEqual([]);
    a.unsubscribe();
    b.unsubscribe();
    expect(source.observers.length).toBe(0);
  }));

  it('withholds future timed posts, publishes and expires them without a database event', fakeAsync(() => {
    const start = timestamp('2026-10-18T10:00:00+02:00');
    const end = timestamp('2026-10-18T12:00:00+02:00');
    let now = start.toMillis() - 1000;
    spyOn(Date, 'now').and.callFake(() => now);
    const timed = { ...record, id: 'timed', vises: undefined, visAltid: false, publiceres: start, aftages: end };
    const fixed = { ...record, vises: false, visAltid: true };
    source.next([fixed, timed]);
    let current: Driftsinfo[];
    let previous: Driftsinfo[];
    const a = service.loadInfoByCategory(true).subscribe(infos => current = infos);
    const b = service.loadInfoByCategory(false).subscribe(infos => previous = infos);
    tick(0);
    expect(current).toEqual([fixed]);
    expect(previous).toEqual([]);
    expect(source.observers.length).toBe(1); // Both tabs share a single listener.
    now = start.toMillis();
    tick(1000);
    expect(current).toEqual([timed, fixed]);
    now = end.toMillis();
    tick(1000);
    expect(current).toEqual([fixed]);
    expect(previous).toEqual([timed]);
    expect(fixed.visAltid).toBeTrue();
    a.unsubscribe();
    b.unsubscribe();
    expect(source.observers.length).toBe(0);
  }));
});
