import {Injectable} from '@angular/core';
import {FakeEvent} from '../../models/fake-event';

@Injectable({
  providedIn: 'root'
})
export class OnlineService {

  constructor() {
  }

  isOnline(evt: FakeEvent) {
    return evt.eventType !== 'logout';
  }
}
