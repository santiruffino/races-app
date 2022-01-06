import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    RaceCardComponent
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
    MatProgressSpinnerModule
  ],
  providers: [
    {
      provide: API_KEY,
      useValue: environment.googleSheetsApiKey,
    },
    GoogleSheetsDbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
