import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {GeoService} from './services/geo/geo.service';

export const currentCountry: BehaviorSubject<string> = new BehaviorSubject<string>('');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private geoService: GeoService) {
    this.geoService.getCountry().subscribe((response: any) => {
      const country = response.country;
      currentCountry.next(country);
    });
  }

  title = 'testCharts';
}
