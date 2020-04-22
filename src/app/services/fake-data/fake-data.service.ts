import {Injectable} from '@angular/core';
import * as faker from 'faker';
import {FakeEvent} from '../../models/fake-event';
import {RandomService} from '../random/random.service';
import {EVENT_TYPES} from '../../models/event-types';
import {BehaviorSubject} from 'rxjs';
import {currentCountry} from '../../app.component';

const usersCount = 50;
export const userData: BehaviorSubject<FakeEvent[]> = new BehaviorSubject<FakeEvent[]>([]);

@Injectable({
  providedIn: 'root'
})
export class FakeDataService {

  usersList = [];
  country = '';

  constructor(private randomService: RandomService) {
    for (let i = 0; i < usersCount; i++) {
      this.usersList.push(new FakeEvent(i, faker.date.recent(),
        EVENT_TYPES[randomService.getRandom(EVENT_TYPES.length)],
        faker.address.countryCode(), faker.internet.userAgent()));
    }
    userData.next(this.usersList);
    currentCountry.subscribe(response => this.country = response);
  }

  getUsers() {
    return userData.asObservable();
  }

  getDate() {
    return new Date(Date.now());
  }

  getUserAgent() {
    return window.navigator.userAgent;
  }

  createNewData(event) {
    const body = new FakeEvent(event.userId, this.getDate(), event.type, this.country, this.getUserAgent());
    this.usersList.push(body);
    this.updateUsersList();
  }

  batchCreateNewData(size, eventType) {
    const batch = [];
    for (let i = 0; i < size; i++) {
      batch.push(new FakeEvent(this.usersList.length + i, this.getDate(), eventType, this.country, this.getUserAgent()));
    }
    this.usersList = [...this.usersList, ...batch];
    this.updateUsersList();
  }

  updateData(event) {
    const body = new FakeEvent(event.userId, this.getDate(), event.type, this.country, this.getUserAgent());
    this.usersList = this.usersList.map(item => {
      if (item.id === event.userId) {
        return body;
      }
      return item;
    });
    this.updateUsersList();
  }

  updateUsersList(): void {
    userData.next(this.usersList);
  }
}
