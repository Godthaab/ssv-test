import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-aersregnskaber',
    templateUrl: './aersregnskaber.component.html',
    styleUrls: ['./aersregnskaber.component.css'],
    standalone: false
})
export class AersregnskaberComponent implements OnInit {

  public show1 = false;
  public show2 = false;
  public buttonName1: any = '2017/2018';
  public buttonName2: any = '2018/2019';

  ngOnInit() {  }

  toggle1() {
    this.show1 = !this.show1;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show1) {
      this.buttonName1 = 'Regnskab 2017/2018';
      this.show2 = false;
    } else {
      this.buttonName1 = 'Regnskab 2017/2018';
    }
  }

    toggle2() {
    this.show2 = !this.show2;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show2) {
      this.buttonName2 = 'Regnskab 2018/2019';
      this.show1 = false;
    } else {
      this.buttonName2 = 'Regnskab 2018/2019';
    }
  }
}
