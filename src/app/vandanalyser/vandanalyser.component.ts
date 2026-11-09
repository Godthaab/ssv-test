import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-vandanalyser',
    templateUrl: './vandanalyser.component.html',
    styleUrls: ['./vandanalyser.component.css'],
    standalone: false
})
export class VandanalyserComponent implements OnInit {

  /* Bruges til Accordion fold ud/ind */
  oneAtATime = true;

  constructor() { }

  ngOnInit() {
  }

}
