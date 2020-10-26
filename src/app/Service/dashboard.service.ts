import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { tableData } from './mock-data';
import { ITableData } from './utils';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getDetailsTableData() {
    return of(tableData) as Observable<ITableData[]>
  }
}
