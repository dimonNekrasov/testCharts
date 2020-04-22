import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FakeEvent} from '../../models/fake-event';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit, OnChanges {

  @Input() data: FakeEvent[];
  chartResults = [];
  currentFilter = 'country';
  currentSortType = '';
  currentSortDirection = '';
  chartView: any[] = [window.innerWidth, window.innerHeight - 200];

  filters = [
    {title: 'Id', value: 'id'},
    {title: 'Country', value: 'country'},
    {title: 'UserAgent', value: 'userAgent'},
  ];
  sortTypes = [
    {title: [this.currentFilter], value: 'name'},
    {title: 'Amount', value: 'value'}
  ];
  sortDirections = [
    {title: 'ASC', value: 'asc'},
    {title: 'DESC', value: 'desc'}
  ];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.parseData(this.currentFilter);
  }

  filterBy(event) {
    this.currentFilter = event;
    this.parseData(this.currentFilter);
    this.sortTypes = [
      {title: [this.currentFilter], value: 'name'},
      {title: 'Amount', value: 'value'}
    ];
  }

  sortBy(sortType?, direction?) {
    this.currentSortType = sortType;
    this.currentSortDirection = direction;
    const copiedArray = JSON.parse(JSON.stringify(this.chartResults));
    this.chartResults = [];
    this.chartResults = copiedArray.sort((a, b) => {
      if (sortType && !isNaN(a[sortType])) {
        a[sortType] = +a[sortType];
        b[sortType] = +b[sortType];
      }
      if (a[sortType] > b[sortType]) {
        return this.currentSortDirection === 'asc' ? 1 : -1;
      }
      if (a[sortType] < b[sortType]) {
        return this.currentSortDirection === 'asc' ? -1 : 1;
      }
    });
  }

  ngOnInit(): void {

  }

  parseData(filter) {
    const result = {};
    for (let i = 0; i < this.data.length; i++) {
      if (result[this.data[i][filter]] == null) {
        result[this.data[i][filter]] = this.data[i].purchaseData;
      } else {
        result[this.data[i][filter]] += this.data[i].purchaseData;
      }
    }
    this.chartResults = Object.keys(result).map(objKey => {
      return {name: objKey, value: result[objKey]};
    }).filter(item => item.value > 0);
    this.changeView();
    this.sortBy(this.currentSortType, this.currentSortDirection);

  }

  changeView() {
    const height = window.innerHeight > this.chartResults.length * 20 ? window.innerHeight : this.chartResults.length * 20;
    this.chartView = [window.innerWidth, height];
  }

}
