import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor() { }

  getRandom(range) {
    return Math.floor(Math.random() * range);
  }

}
