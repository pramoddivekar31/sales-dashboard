import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/Shared/Service/dashboard.service';
import { ISalesData } from 'src/app/Shared/Service/utils';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  salesData: ISalesData

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getSalesData()
  }

  getSalesData() {
    this.dashboardService.getSalesData().subscribe((salesList: ISalesData) => {
      this.salesData = salesList
      console.log("this.salesData",this.salesData)
    })
  }
}
