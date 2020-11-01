import { Component, OnInit, Input } from '@angular/core';
import { ISalesDetails } from 'src/app/Shared/Service/utils';

@Component({
  selector: 'app-sales-representation',
  templateUrl: './sales-representation.component.html',
  styleUrls: ['./sales-representation.component.css']
})
export class SalesRepresentationComponent implements OnInit {

  sales: ISalesDetails
  dropdownOptions: string[] = ['All Sales Reps', 'Year Wise Sales']

  private _salesDetails: ISalesDetails[];
  @Input('salesDetails')

  set salesDetails(value: ISalesDetails[]){
    this._salesDetails = value
    this.sales = value[0]
  }

  constructor() { }

  ngOnInit(): void { }

  onSelectionChange(event) {
    const selectedValue: string = event.target.value
    const index = this.dropdownOptions.indexOf(selectedValue)
    this.sales = this._salesDetails[index]
  }

}
