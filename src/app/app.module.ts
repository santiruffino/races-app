import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RaceCardComponent } from './components/race-card/race-card.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { FlexModule } from "@angular/flex-layout";
import { HttpClientModule } from "@angular/common/http";
import { API_KEY, GoogleSheetsDbService } from 'ng-google-sheets-db';
import { environment } from "../environments/environment";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { registerLocaleData } from '@angular/common';
import _default from '@angular/common/locales/es-AR';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { IntroCardComponent } from './components/intro-card/intro-card.component';

registerLocaleData(_default);

@NgModule({
  declarations: [
    AppComponent,
    RaceCardComponent,
    IntroCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    FlexModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: API_KEY,
      useValue: environment.googleSheetsApiKey,
    },
    { provide: LOCALE_ID, useValue: "es-AR" },
    GoogleSheetsDbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
