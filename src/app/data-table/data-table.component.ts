import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataTableService } from './data-table.service';
import { Users } from './Users';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  InputVar: ElementRef;

  options = ['<= 200,000 km', '> 200,000 km'];
  filteredData: Users[];
  users: Users[] = [];

  columns = ['Driver', 'Company', 'Distance', 'Score'];
  index = ['Driver', 'Company', 'Distance', 'Score'];

  constructor(private data: DataTableService) {
    this.filteredData = this.users;
  }

  private _listFilter = '';

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredData = this.performFilter(value);
  }

  performFilter(filterBy: string): Users[] {
    if (filterBy.includes('<=')) {
      filterBy = filterBy.replace(/\D/g, '');
      return this.users.filter(
        (user: Users) => +user.Distance.replace(/\D/g, '') <= +filterBy
      );
    } else if (filterBy.includes('>')) {
      filterBy = filterBy.replace(/\D/g, '');
      return this.users.filter(
        (user: Users) => +user.Distance.replace(/\D/g, '') > +filterBy
      );
    }
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.data.getUsers().subscribe(
      (response) => {
        this.users = response;
        this.filteredData = this.users;
      },
      (error) => {
        console.log('Error fetching the data', error);
      }
    );
  }

  reset() {
    this.InputVar.nativeElement.value = '';
    this.filteredData = this.users;
    return this.filteredData;
  }
}
