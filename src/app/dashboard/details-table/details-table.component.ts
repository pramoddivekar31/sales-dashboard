import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/Service/dashboard.service';

@Component({
  selector: 'app-details-table',
  templateUrl: './details-table.component.html',
  styleUrls: ['./details-table.component.css']
})
export class DetailsTableComponent implements OnInit {

  columHeaders: string[] = ['Sales rep', 'Date', 'Client', 'Primary Contact Person', 'Title', 'Vertical', 'Meeting Location', 'Purpose of Interaction', 'Outcome and Remarks', 'Engagement Status']

  constructor(private dashboadService : DashboardService) { }

  ngOnInit(): void {
  }

}
