export interface Driftsinfo {
  id: string;
  infoNr: number;
  overskrift: string;
  beskrivelse: string;
  berorte: string;
  vises: boolean;
  publiceres: Date;
  aftages: Date;
  // aftages: Timestamp;
  /*  promoStartAt: Timestamp; */
}
