import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DriverStandingsService } from '../../services/driver-standings.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-driver-standings',
  imports: [CommonModule],
  templateUrl: './driver-standings.component.html',
  styleUrl: './driver-standings.component.scss'
})
export class DriverStandingsComponent {
  public driverStandings$: Observable<any>;

  constructor(private driverStandingsService: DriverStandingsService) {
    this.driverStandings$ = this.driverStandingsService.getDriverStandings();
  }
}
