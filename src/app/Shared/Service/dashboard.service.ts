import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { salesData, customerDetails } from './mock-data';
import { ISalesData, ICustomer } from './utils';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getSalesData(): Observable<ISalesData> {
    return of<ISalesData>(salesData)
  }

  getCustomerDetails(): Observable<ICustomer[]> {
    return of<ICustomer[]>(customerDetails)
  }
}
