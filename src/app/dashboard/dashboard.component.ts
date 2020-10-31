import { Component, OnInit, ErrorHandler } from '@angular/core';
import { DashboardService } from 'src/app/Shared/Service/dashboard.service';
import { ISalesData } from 'src/app/Shared/Service/utils';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit  {

  salesData: ISalesData

  constructor(private dashboardService: DashboardService,) { }

  ngOnInit(): void {
    this.getSalesData()
  }

  getSalesData(): void {
    this.dashboardService.getSalesData().subscribe((salesList: ISalesData) => {
      this.salesData = salesList
    })
  }
}
