import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterLink, RouterOutlet],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public navItems: Array<any> = [
    {index: 0,link: 'Race overview', url: 'race-overview'},
    {index: 1, link: 'P10 ranking', url: 'p10-ranking'},
    {index: 2, link: 'Driver standing', url: 'driver-standing'},
    {index: 3, link: 'Constructor standing', url: 'constructor-standing'},
  ];


}
