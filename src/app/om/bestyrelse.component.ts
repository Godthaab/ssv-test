import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPerson } from '../model/IPerson';
import { BestyrelsenService } from '../services/bestyrelsen.service';
import { TutorialService } from '../services/tutorial.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-bestyrelse',
  templateUrl: './bestyrelse.component.html',
  styleUrls: ['./bestyrelse.component.css'],
})
export class BestyrelseComponent implements OnInit {
  tutorials: any;
  currentTutorial = null;
  currentIndex = -1;
  title = '';

  constructor(private tutorialService: TutorialService) {}

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  refreshList(): void {
    this.currentTutorial = null;
    this.currentIndex = -1;
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.tutorialService
      .getAll()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            id: c.payload.doc.id,
            ...c.payload.doc.data(),
          }))
        )
      )
      .subscribe((data) => {
        this.tutorials = data;
      });
  }

  setActiveTutorial(tutorial, index): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }
}

  // personer: IPerson[];

  // constructor(
  //   private route: ActivatedRoute,
  //   private bestyrelsenService: BestyrelsenService
  // ) {}

  // ngOnInit(): void {
  //   this.bestyrelsenService.getAllePersoner().subscribe(
  //     (data) => {
  //       this.personer = data;
  //       console.log(data);
  //     },
  //     (error) => {
  //       console.log('httperror:');
  //       console.log(error);
  //     }
  //   );
  // }

