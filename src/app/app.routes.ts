import { Routes } from '@angular/router';
import { DriverStandingsComponent } from './components/driver-standings/driver-standings.component';
import { ConstructorStandingsComponent } from './components/constructor-standings/constructor-standings.component';
import { RaceOverviewComponent } from './components/race-overview/race-overview.component';
import { P10RankingComponent } from './components/p10-ranking/p10-ranking.component';

export const routes: Routes = [
  {path: 'race-overview', component: RaceOverviewComponent},
  {path: 'p10-ranking', component: P10RankingComponent},
  {path: 'driver-standing', component: DriverStandingsComponent},
  {path: 'constructor-standing', component: ConstructorStandingsComponent},
  {path: '', redirectTo: 'race-overview', pathMatch: 'full'},
  {path: '**', redirectTo: 'race-overview'}
];
