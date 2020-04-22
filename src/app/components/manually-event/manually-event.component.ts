import {Component, OnInit} from '@angular/core';
import {FakeDataService} from '../../services/fake-data/fake-data.service';
import {FakeEvent} from '../../models/fake-event';
import {GeoService} from '../../services/geo/geo.service';
import {EVENT_TYPES} from '../../models/event-types';

@Component({
  selector: 'app-manually-event',
  templateUrl: './manually-event.component.html',
  styleUrls: ['./manually-event.component.css']
})
export class ManuallyEventComponent implements OnInit {

  currentEventGenerationType = 'update';
  usersList = [];
  eventsList = [];
  currentEvent: FakeEvent = {
    id: null,
    date: '',
    eventType: '',
    country: '',
    userAgent: '',
    purchaseData: ''
  };

  constructor(private fakeDataService: FakeDataService, private geoService: GeoService) {
    this.eventsList = EVENT_TYPES;
  }

  ngOnInit(): void {
    this.getUsers();
    this.getCountry();
  }

  getCountry() {
    this.geoService.getCountry().subscribe((response: any) => {
      this.currentEvent.country = response.country;
    });
  }

  getUsers() {
   this.fakeDataService.getUsers().subscribe((response: FakeEvent[]) => {
     this.usersList = response;
   });
  }

  changeGenerationType(event) {
    this.currentEventGenerationType = event.value;
  }

  createEvent() {
    if (this.currentEventGenerationType === 'new') {
      this.createNewEvent();
    } else {
      this.updateEvent();
    }
  }

  createNewEvent() {
    const event = {userId: this.usersList.length + 1, type: this.currentEvent.eventType};
    this.fakeDataService.createNewData(event);
  }

  updateEvent() {
    const event = {userId: this.currentEvent.id, type: this.currentEvent.eventType};
    this.fakeDataService.updateData(event);
  }

}
