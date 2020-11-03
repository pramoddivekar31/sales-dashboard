import { Component, OnInit, Input } from '@angular/core';
import { ICustomerStatistics } from 'src/app/Shared/Service/utils';

@Component({
  selector: 'app-statistic-cards',
  templateUrl: './statistic-cards.component.html',
  styleUrls: ['./statistic-cards.component.css']
})
export class StatisticCardsComponent implements OnInit {

  constructor() { }

  @Input() statistics: ICustomerStatistics;

  ngOnInit(): void { }

  getClass(index) {
    return {
      'first-card-back-color': index === 0,
      'second-card-back-color': index === 1,
      'third-card-back-color': index === 2
    }
  }

}
