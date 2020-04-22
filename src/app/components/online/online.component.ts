import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {OnlineService} from '../../services/online/online.service';
import {FakeEvent} from '../../models/fake-event';

@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.css']
})
export class OnlineComponent implements OnInit, OnChanges {

  @Input() data: FakeEvent[];

  chartView: any[] = [window.innerWidth, window.innerHeight - 200];
  chartScheme = {
    domain: ['#008000', '#800000']
  };
  chartResults = [
    {name: 'online', value: 0},
    {name: 'offline', value: 0}
  ];

  constructor(private onlineService: OnlineService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.resetResults();
    this.parseData();
  }

  ngOnInit(): void {
  }

  resetResults(): void {
    this.chartResults = [
      {name: 'online', value: 0},
      {name: 'offline', value: 0}
    ];
  }

  parseData() {
    this.data.forEach(item => {
      if (this.onlineService.isOnline(item)) {
        this.chartResults[0].value++;
      } else {
        this.chartResults[1].value++;
      }
    });
  }
}
