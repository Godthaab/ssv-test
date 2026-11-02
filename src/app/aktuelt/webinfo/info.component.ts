import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Driftsinfo } from 'src/app/model/driftsinfo';
import { DriftsinfoService } from 'src/app/services/driftsinfo.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  aktuelle$: Observable<Driftsinfo[]>;

  planlagte$: Observable<Driftsinfo[]>;

  tidligere$: Observable<Driftsinfo[]>;

  constructor(
    private router: Router,
    private driftinfoService: DriftsinfoService
  ) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.reloadInfo();
  }

  reloadInfo(): void {
    this.aktuelle$ = this.driftinfoService.loadInfoByCategory(true);
    this.planlagte$ = this.driftinfoService.loadPlannedInfo();
    this.tidligere$ = this.driftinfoService.loadInfoByCategory(false);
  }
}
