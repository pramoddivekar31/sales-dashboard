import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { salesData } from './mock-data';
import { ISalesData } from './utils';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getSalesData() {
    return of(salesData) as Observable<ISalesData[]>
  }
}
