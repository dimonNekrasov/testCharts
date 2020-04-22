import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeoService {

  constructor(private http: HttpClient) { }

  getCountry() {
    return this.http.get('http://ipinfo.io', {headers: {
      'Authorization': `Bearer 85999150dbc886`
      }});
  }
}
