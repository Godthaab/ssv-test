import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Driftsinfo } from 'src/app/model/driftsinfo';
import { DriftsinfoService } from 'src/app/services/driftsinfo.service';

@Component({
    selector: 'app-driftsinfo',
    templateUrl: './driftsinfo.component.html',
    styleUrls: ['./driftsinfo.component.css'],
    standalone: false
})
export class DriftsinfoComponent {
  @Input()
  driftsinfos: Driftsinfo[];
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private driftsinfoService: DriftsinfoService
  ) {}

}
