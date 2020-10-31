import { Component, OnInit,Input } from '@angular/core';
import { columDefinitions, columHeaders } from 'src/app/Shared/Service/mock-data';
import { ISalesData, ICustomer } from 'src/app/Shared/Service/utils';

@Component({
  selector: 'app-details-table',
  templateUrl: './details-table.component.html',
  styleUrls: ['./details-table.component.css']
})
export class DetailsTableComponent implements OnInit {

  colDefs: string[] = columDefinitions
  columHeaders: string[] = columHeaders
  @Input() customerDetails: ICustomer[]

  constructor() { }

  ngOnInit(): void {
    console.log("this.salesData",this.customerDetails)

   }
}
