import { Component, OnInit, ErrorHandler } from '@angular/core';
import { DashboardService } from 'src/app/Shared/Service/dashboard.service';
import { ISalesData, ICustomer } from 'src/app/Shared/Service/utils';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  salesData: ISalesData
  dayWiseData: string[] = ['TODAY', 'LAST WEEK', 'LAST MONTH', 'THIS QUARTER', 'THIS YEAR']
  customerDetails: ICustomer[];

  constructor(private dashboardService: DashboardService,) { }

  ngOnInit(): void {
    this.getSalesData()
    this.getCustomerData()
  }

  getSalesData(): void {
    this.dashboardService.getSalesData().subscribe((salesList: ISalesData) => {
      this.salesData = salesList
    })
  }

  getCustomerData() {
    this.dashboardService.getCustomerDetails().subscribe((customerData: ICustomer[]) => {
      this.customerDetails = customerData
    })
  }
}
