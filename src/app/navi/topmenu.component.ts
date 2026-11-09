import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-topmenu',
    templateUrl: './topmenu.component.html',
    styleUrls: ['./topmenu.component.css'],
    standalone: false
})
export class TopmenuComponent implements OnInit {
  @Input() homeKnap: any;




  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor() { }

  ngOnInit() {
  }

}
