import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vandkvalitet',
  templateUrl: './vandkvalitet.component.html',
  styleUrls: ['./vandkvalitet.component.css']
})
export class VandkvalitetComponent implements OnInit {
/* Bruges til Accordion fold ud/ind */
    oneAtATime = true;

  constructor() { }

  ngOnInit() {
  }

}
