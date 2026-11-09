import { Component, Input } from '@angular/core';
import { IPerson } from '../model/IPerson';



@Component({
    selector: 'app-bestyrelses-liste',
    templateUrl: './bestyrelses-liste.component.html',
    styleUrls: ['./bestyrelses-liste.component.css'],
    standalone: false
})
export class BestyrelsesListeComponent {
  @Input() person: IPerson;

}
