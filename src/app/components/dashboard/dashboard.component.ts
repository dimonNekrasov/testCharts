import {Component, OnInit} from '@angular/core';
import {FakeDataService} from '../../services/fake-data/fake-data.service';
import {FakeEvent} from '../../models/fake-event';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  usersList = [];
  sidenavOpened = false;

  constructor(private fakeData: FakeDataService) {
  }

  ngOnInit(): void {
    this.fakeData.getUsers().subscribe((response: FakeEvent[]) => {
      this.usersList = response.map(item => item);
    });
  }

}
