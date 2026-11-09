import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-referater',
    templateUrl: './referater.component.html',
    styleUrls: ['./referater.component.css'],
    standalone: false
})
export class ReferaterComponent implements OnInit {

  public show1 = false;
  public show2 = false;
  public buttonName1: any = '1. juli 2018';
  public buttonName2: any = 'dd mm 2018';

  ngOnInit() {  }

  toggle1() {
    this.show1 = !this.show1;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show1) {
      this.buttonName1 = '1. juli 2018';
      this.show2 = false;
    } else {
      this.buttonName1 = '1. juli 2018';
    }
  }

    toggle2() {
    this.show2 = !this.show2;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show2) {
      this.buttonName2 = 'dd mm 2018';
      this.show1 = false;
    } else {
      this.buttonName2 = 'dd mm 2018';
    }
  }
}
