import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// PeTec inport

// Forside:
import { VelkommenComponent } from './home/velkommen.component';

// Menupunkt: Forbrugerinfo
import { KundeinfoComponent } from './forbrugerinfo/kundeinfo.component';
import { RegulativComponent } from './forbrugerinfo/regulativ.component';
import { VedtaekterComponent } from './forbrugerinfo/vedtaekter.component';

// Menupunkt: Aktuelt


// Menupunkt: Beredskabsplan
import { BeredskabsplanComponent } from './beredskabsplan/beredskabsplan.component';

// Menupunkt: Vandanalyser
import { VandkvalitetComponent } from './vandkvalitet/vandkvalitet.component';
import { VandanalyserComponent } from './vandanalyser/vandanalyser.component';
// Menupunkt: Vandmåler
import { VandmaalerComponent } from './vandmaaler/vandmaaler.component';
// Menupunkt: Priser
import { TakstbladComponent } from './Priser/takstblad.component';

// Menupunkt: Om
import { BestyrelseComponent } from './om/bestyrelse.component';
import { SamarbejdspartnereComponent } from './om/samarbejdspartnere.component';

// Diverse
import { UpsComponent } from './ups.component';
// import { ForsideComponent } from './aktuelt/webinfo/forside.component';
import { InfoComponent } from './aktuelt/webinfo/info.component';
import { TutorialsListComponent } from './aktuelt/webinfo/tutorials-list.component';
import { AddTutorialComponent } from './aktuelt/webinfo/add-tutorial.component';

// ROUTES
const routes: Routes = [
  { path: 'velkommen', component: VelkommenComponent },

  { path: 'tur', component: TutorialsListComponent },
  { path: 'add', component: AddTutorialComponent },

  // Menupunkt: Forbrugerinfo
  { path: 'kundeinfo', component: KundeinfoComponent },
  // { path: 'forside', component: ForsideComponent },
  { path: 'info', component: InfoComponent },
  { path: 'regulativ', component: RegulativComponent },



  // Menupunkt: Beredskabsplan
  { path: 'beredskabsplan', component: BeredskabsplanComponent },
  { path: 'vedtaegter', component: VedtaekterComponent },

  // Menupunkt: Vandkvalitet
  { path: 'vandkvalitet', component: VandkvalitetComponent },
  { path: 'vandanalyser', component: VandanalyserComponent },

  // Menupunkt: Vandmaaler
  { path: 'vandmaaler', component: VandmaalerComponent },

  // Menupunkt: Priser
  { path: 'priser', component: TakstbladComponent },

  // Menupunkt: Om
  { path: 'bestyrelse', component: BestyrelseComponent },
  { path: 'samarbejdspartnere', component: SamarbejdspartnereComponent },

  // Diverse
  { path: '', redirectTo: 'velkommen', pathMatch: 'full' },
  { path: '**', component: UpsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
