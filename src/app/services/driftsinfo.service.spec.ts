import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Driftsinfo } from '../model/driftsinfo';
import { DriftsinfoService } from './driftsinfo.service';

describe('Manual visibility on the public website (no Firebase connection)', () => {
  const record: Driftsinfo = {
    id: 'old', infoNr: 1, overskrift: 'Fast information', beskrivelse: 'Test',
    berorte: 'Alle', vises: true,
    publiceres: new Date('2025-10-08T08:25:00+02:00'),
    aftages: new Date('2024-09-24T09:17:00+02:00'),
  };
  let source: BehaviorSubject<Driftsinfo[]>;
  let service: DriftsinfoService;

  beforeEach(() => {
    source = new BehaviorSubject<Driftsinfo[]>([]);
    // Apply the actual query to in-memory records, including the date sort.
    const db = {
      collection: (_name: string, query: (ref: any) => any) => {
        const filters: Array<(info: Driftsinfo) => boolean> = [];
        let sortField: string;
        let direction: string;
        const ref = {
          where: (field: string, _operator: string, value: boolean) => {
            filters.push(info => info[field] === value);
            return ref;
          },
          orderBy: (field: string, order: string) => {
            sortField = field;
            direction = order;
            return ref;
          },
        };
        query(ref);
        return { valueChanges: () => source.pipe(map(infos => infos
          .filter(info => filters.every(filter => filter(info)) && sortField in info)
          .sort((a, b) => (a[sortField].getTime() - b[sortField].getTime()) * (direction === 'desc' ? -1 : 1)))) };
      },
    };
    service = new DriftsinfoService(db as unknown as AngularFirestore);
  });

  it('keeps expired, reversed and future dates current when enabled, newest first', () => {
    const expired = { ...record, id: 'expired', aftages: new Date('2025-10-09T08:25:00+02:00') };
    const future = { ...record, id: 'future', publiceres: new Date('2030-01-01T10:00:00+01:00') };
    const hidden = { ...record, id: 'hidden', vises: false };
    source.next([record, expired, hidden, future]);
    let current: Driftsinfo[];
    let previous: Driftsinfo[];
    const a = service.loadInfoByCategory(true).subscribe(infos => current = infos);
    const b = service.loadInfoByCategory(false).subscribe(infos => previous = infos);
    expect(current).toEqual([future, record, expired]);
    expect(previous).toEqual([hidden]);
    a.unsubscribe();
    b.unsubscribe();
  });

  it('moves a message only when its stored visibility flag changes', () => {
    source.next([record]);
    let current: Driftsinfo[];
    let previous: Driftsinfo[];
    const a = service.loadInfoByCategory(true).subscribe(infos => current = infos);
    const b = service.loadInfoByCategory(false).subscribe(infos => previous = infos);
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
  });
});
