import { Component, OnInit, Input } from '@angular/core';
import { ISalesDetails } from 'src/app/Shared/Service/utils';

@Component({
  selector: 'app-sales-representation',
  templateUrl: './sales-representation.component.html',
  styleUrls: ['./sales-representation.component.css']
})
export class SalesRepresentationComponent implements OnInit {

  @Input() salesDetails: ISalesDetails[]

  constructor() { }

  ngOnInit(): void { }

}
