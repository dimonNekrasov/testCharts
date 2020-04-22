import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {FakeEvent} from '../../models/fake-event';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent implements OnInit, OnChanges {

  dataSource: MatTableDataSource<FakeEvent>;
  displayedColumns: string[];
  @Input() data: FakeEvent[];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource(this.data);
    this.displayedColumns = Object.keys(this.data[0]);
    this.displayedColumns.splice(this.displayedColumns.indexOf('userAgent'), 1, 'OS', 'device');
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

