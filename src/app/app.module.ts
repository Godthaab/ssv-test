import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// PeTec import
import { BestyrelsenService } from './services/bestyrelsen.service';
import { TopmenuComponent } from './navi/topmenu.component';
import { VelkommenComponent } from './home/velkommen.component';
import { BeredskabsplanComponent } from './beredskabsplan/beredskabsplan.component';
import { RegulativComponent } from './forbrugerinfo/regulativ.component';
import { VedtaekterComponent } from './forbrugerinfo/vedtaekter.component';
import { AersregnskaberComponent } from './forbrugerinfo/aersregnskaber.component';
import { VandforbrugComponent } from './forbrugerinfo/vandforbrug.component';
import { RaadComponent } from './forbrugerinfo/raad.component';
import { KikComponent } from './forbrugerinfo/kik.component';
import { ReferaterComponent } from './forbrugerinfo/referater.component';
import { VandkvalitetComponent } from './vandkvalitet/vandkvalitet.component';
import { BestyrelseComponent } from './om/bestyrelse.component';
import { SamarbejdspartnereComponent } from './om/samarbejdspartnere.component';
import { UpsComponent } from './ups.component';

import { HomeKnapComponent } from './navi/home-knap.component';

import { TakstbladComponent } from './Priser/takstblad.component';
import { KundeinfoComponent } from './forbrugerinfo/kundeinfo.component';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { VinterklargoringComponent } from './forbrugerinfo/vinterklargoring.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { VandanalyserComponent } from './vandanalyser/vandanalyser.component';
import { BestyrelsesListeComponent } from './om/bestyrelses-liste.component';
import { CardVandvaerkComponent } from './vandanalyser/card-vandvaerk.component';
import { CardLedningsnetComponent } from './vandanalyser/card-ledningsnet.component';
import { CardBoringComponent } from './vandanalyser/card-boring.component';
import { VandmaalerComponent } from './vandmaaler/vandmaaler.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
// PeTec Material
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { DriftsinfoComponent } from './aktuelt/webinfo/driftsinfo.component';
import { InfoComponent } from './aktuelt/webinfo/info.component';
import { TutorialsListComponent } from './aktuelt/webinfo/tutorials-list.component';
import { AddTutorialComponent } from './aktuelt/webinfo/add-tutorial.component';
// SLUT: PeTec Material

@NgModule({
  declarations: [
    AppComponent,
    TopmenuComponent,
    VelkommenComponent,
    BeredskabsplanComponent,
    VedtaekterComponent,
    VandkvalitetComponent,
    ReferaterComponent,
    BestyrelseComponent,
    SamarbejdspartnereComponent,
    UpsComponent,
    AersregnskaberComponent,
    VandforbrugComponent,
    RaadComponent,
    KikComponent,
    HomeKnapComponent,
    TakstbladComponent,
    KundeinfoComponent,
    VinterklargoringComponent,
    RegulativComponent,
    VandanalyserComponent,
    BestyrelsesListeComponent,
    CardVandvaerkComponent,
    CardLedningsnetComponent,
    CardBoringComponent,
    VandmaalerComponent,
    DriftsinfoComponent,
    InfoComponent,
    TutorialsListComponent,
    AddTutorialComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AccordionModule.forRoot(),
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    // PeTec Material
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatTabsModule,
    // SLUT: PeTec Material
  ],
  providers: [BestyrelsenService],
  bootstrap: [AppComponent],
})
export class AppModule {}
