import { Component, OnInit, Input } from '@angular/core';
import { ISalesDetails } from 'src/app/Shared/Service/utils';
import { funnelChartLabels, funnelChartColumDefs } from 'src/app/Shared/Service/mock-data';

@Component({
  selector: 'app-funnel-chart',
  templateUrl: './funnel-chart.component.html',
  styleUrls: ['./funnel-chart.component.css']
})
export class FunnelChartComponent implements OnInit {

  @Input() chartData: ISalesDetails
  labels = funnelChartLabels
  columDefs = funnelChartColumDefs

  constructor() { }

  ngOnInit(): void {
  }

  getLabelClass(isLast) {
    return {
      'label-value': true,
      'label': true,
      'last-label-value': isLast
    }
  }

  getValueClass(isLast) {
    return {
      'label-value': true,
      'value': true,
      'last-label-value': isLast
    }
  }

}
