import { Component, OnInit } from '@angular/core';
import { GoogleSheetsDbService } from "ng-google-sheets-db";
import { Observable } from "rxjs";
import { raceAttributesMapping } from "../../models/raceAttributesMapping.model";
import { Race } from "../../interfaces/race";
import * as moment from "moment";


@Component({
  selector: 'app-race-card',
  templateUrl: './race-card.component.html',
  styleUrls: ['./race-card.component.css']
})
export class RaceCardComponent implements OnInit {
  races$: Observable<Race[]> | undefined;
  allRaces: Race[] = [];
  loading: boolean = true;

  constructor(
    private googleSheetsDbService: GoogleSheetsDbService
  ) {
  }

  ngOnInit(): void {
    this.races$ = this.googleSheetsDbService.get<Race>('1FKDSoMVMJb1S3RRGd2axyKLDeW8PwRRrKSxyyRZ-Dqs', "Carreras", raceAttributesMapping);

    this.races$.subscribe(races => {
      races.map((race: Race) => {
        const newDate = moment(race.date, 'DD/MM/YYYY');
        race.date = newDate.format('MM/DD/YYYY');

        if (race.distance <= 10) {
          race.color = 'blue';
        } else if (race.distance > 10 && race.distance < 21) {
          race.color = 'orange';
        } else if (race.distance >= 21) {
          race.color = 'red';
        }
        return this.allRaces.push(race);
      });
      this.allRaces.sort((a,b) => {
        return <any>new Date(b.date) - <any>new Date(a.date);
      })
      this.loading = false;
    });
  }
}
