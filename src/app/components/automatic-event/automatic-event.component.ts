import {Component, OnInit} from '@angular/core';
import {FakeDataService} from '../../services/fake-data/fake-data.service';
import {EVENT_TYPES} from '../../models/event-types';

@Component({
  selector: 'app-automatic-event',
  templateUrl: './automatic-event.component.html',
  styleUrls: ['./automatic-event.component.css']
})
export class AutomaticEventComponent implements OnInit {

  currentEventGenerationType = {
    method: 'update',
    frequency: 'interval'
  };
  usersList = [];
  range = {
    from: null,
    to: null
  };
  interval = 0;
  repeats = 0;
  timeout = 0;
  stepsUpdate = [
    {id: 0, eventType: 'login'}
  ];
  stepsCreate = [
    {batchSize: 1, eventType: 'login'}
  ];
  eventsList = [];
  batchLength = 0;

  currentEvent = {
    id: 0,
    eventType: 'purchase'
  };

  constructor(private fakeDataService: FakeDataService) {
    this.eventsList = EVENT_TYPES;
  }

  ngOnInit(): void {
    this.getUsers();
  }

  changeGenerationType(event) {
    if (event.hasOwnProperty('method')) {
      this.currentEventGenerationType.method = event.method.value;
    } else {
      this.currentEventGenerationType.frequency = event.frequency.value;
    }
  }

  getUsers() {
    this.fakeDataService.getUsers().subscribe(response => this.usersList = response);
  }

  checkInterval(count, interval) {
    if (this.repeats === count) {
      clearInterval(interval);
    }
  }

  updateEventWithInterval() {
    this.repeats = this.stepsUpdate.length;
    let intervalCount = 0;
    const eventIntervalUpdate = setInterval(() => {
      const event = {userId: this.stepsUpdate[intervalCount].id, type: this.stepsUpdate[intervalCount].eventType};
      this.fakeDataService.updateData(event);
      intervalCount++;
      this.checkInterval(intervalCount, eventIntervalUpdate);
    }, this.interval);
  }

  updateWithTimeout() {
    setTimeout(() => {
      const event = {userId: this.currentEvent.id, type: this.currentEvent.eventType};
      this.fakeDataService.updateData(event);
    }, this.timeout);
  }

  createWithTimeout() {
    setTimeout(() => {
      if (this.batchLength > 0) {
        return this.fakeDataService.batchCreateNewData(this.batchLength, this.currentEvent.eventType);
      }
      const event = {userId: this.usersList.length + 1, type: this.currentEvent.eventType};
      this.fakeDataService.createNewData(event);
    }, this.timeout);
  }

  createEventWithInterval() {
    this.repeats = this.stepsCreate.length;
    let intervalCount = 0;
    const eventIntervalCreate = setInterval(() => {
      this.fakeDataService.batchCreateNewData(this.stepsCreate[intervalCount].batchSize, this.stepsCreate[intervalCount].eventType);
      intervalCount++;
      this.checkInterval(intervalCount, eventIntervalCreate);
    }, this.interval);
  }

  addStep() {
    if (this.currentEventGenerationType.method === 'update') {
      this.stepsUpdate.push({
        id: 0,
        eventType: 'login'
      });
    } else {
      this.stepsCreate.push({
        batchSize: 1,
        eventType: 'login'
      });
    }
  }

  removeStep(index) {
    if (this.currentEventGenerationType.method === 'update') {
      this.stepsUpdate.splice(index, 1);
    } else {
      this.stepsCreate.splice(index, 1);
    }
  }

  generateEvent() {
    if (this.currentEventGenerationType.method === 'update') {
      if (this.currentEventGenerationType.frequency === 'interval') {
        return this.updateEventWithInterval();
      } else {
        this.updateWithTimeout();
      }
    } else {
      if (this.currentEventGenerationType.frequency === 'interval') {
        this.createEventWithInterval();
      } else {
        this.createWithTimeout();
      }
    }
  }

}
