import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConstructorStandingService {

  constructor(private httpClient: HttpClient) { }

  public getConstructorStandings() {
    return this.httpClient.get<any>('https://api.jolpi.ca/ergast/f1/2024/constructorstandings/').pipe(
      map((response) => response.MRData.StandingsTable.StandingsLists[0].ConstructorStandings)
    );
  }
}
