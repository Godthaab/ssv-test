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
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatNativeDateModule } from '@angular/material/core';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { MatLegacyProgressBarModule as MatProgressBarModule } from '@angular/material/legacy-progress-bar';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
import { MatRippleModule } from '@angular/material/core';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatLegacySliderModule as MatSliderModule } from '@angular/material/legacy-slider';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
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
