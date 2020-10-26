import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/Service/dashboard.service';
import { ISalesData } from 'src/app/Service/utils';
import { colDefs, columHeaders } from 'src/app/Service/mock-data';

@Component({
  selector: 'app-details-table',
  templateUrl: './details-table.component.html',
  styleUrls: ['./details-table.component.css']
})
export class DetailsTableComponent implements OnInit {

  colDefs: string[] = colDefs
  columHeaders: string[] = columHeaders
  salesRepresentativeData: ISalesData[]

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getSalesRepresentativeData()
  }

  getSalesRepresentativeData() {
    this.dashboardService.getSalesData().subscribe((salesData: ISalesData[]) => {
      this.salesRepresentativeData = salesData
    })
  }

}
