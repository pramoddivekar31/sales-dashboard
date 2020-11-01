import { Component, OnInit, Input } from '@angular/core';
import { ISalesDetails } from 'src/app/Shared/Service/utils';

@Component({
  selector: 'app-calls-wins-revenue',
  templateUrl: './calls-wins-revenue.component.html',
  styleUrls: ['./calls-wins-revenue.component.css']
})
export class CallsWinsRevenueComponent implements OnInit {

  @Input() chartData: ISalesDetails;

  constructor() { }

  ngOnInit(): void {
  }

}
