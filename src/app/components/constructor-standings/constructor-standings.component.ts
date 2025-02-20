import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstructorStandingService } from '../../services/constructor-standing.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-constructor-standings',
  imports: [CommonModule],
  templateUrl: './constructor-standings.component.html',
  styleUrl: './constructor-standings.component.scss'
})
export class ConstructorStandingsComponent {
  public constructStandings$: Observable<any>;

  constructor(private constructorStandingsService: ConstructorStandingService) {
    this.constructStandings$ = this.constructorStandingsService.getConstructorStandings();
  }

}
