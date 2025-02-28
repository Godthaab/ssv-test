import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vandanalyser',
  templateUrl: './vandanalyser.component.html',
  styleUrls: ['./vandanalyser.component.css']
})
export class VandanalyserComponent implements OnInit {

  /* Bruges til Accordion fold ud/ind */
  oneAtATime = true;

  constructor() { }

  ngOnInit() {
  }

}
