import { Component, OnInit, Input } from '@angular/core';
import { columDefinitions, columHeaders } from 'src/app/Shared/Service/mock-data';
import { ISalesData, ICustomer } from 'src/app/Shared/Service/utils';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  colDefs: string[] = columDefinitions
  columHeaders: string[] = columHeaders
  @Input() customerDetails: ICustomer[]

  constructor() { }

  ngOnInit(): void { }
}
