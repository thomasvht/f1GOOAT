import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Driver } from '../entities/driver.entity';

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  constructor(private httpClient: HttpClient) { }

  public getDrivers(): Observable<Array<Driver>> {
    return this.httpClient.get<any>('https://api.jolpi.ca/ergast/f1/2024/drivers/').pipe(
      map((response) => response.MRData.DriverTable.Drivers)
    );
  }
}
