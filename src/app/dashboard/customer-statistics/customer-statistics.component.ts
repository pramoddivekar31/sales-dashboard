import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ICustomerStatistics } from 'src/app/Shared/Service/utils';

@Component({
  selector: 'app-customer-statistics',
  templateUrl: './customer-statistics.component.html',
  styleUrls: ['./customer-statistics.component.css'],
})

export class CustomerStatisticsComponent implements OnInit {

  constructor() { }

  @Input() customerStatistics: ICustomerStatistics[]

  ngOnInit(): void {
  }

}
