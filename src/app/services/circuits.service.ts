import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Circuit } from '../entities/circuit.entity';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CircuitsService {

  constructor(private httpClient: HttpClient) { }

  public getCircuits(): Observable<Array<Circuit>> {
    return this.httpClient.get<any>('https://api.jolpi.ca/ergast/f1/circuits').pipe(
      map((response) => response.MRData.CircuitTable.Circuits)
    );
  }
}
