import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-home-knap',
    templateUrl: './home-knap.component.html',
    styleUrls: ['./home-knap.component.css'],
    standalone: false
})
export class HomeKnapComponent {
  /**
   * ToDo: Lav det sådan, så det kun er på undersider at HOME icon bliver vist.
   */
  @Input() homeKnap: any;
}
