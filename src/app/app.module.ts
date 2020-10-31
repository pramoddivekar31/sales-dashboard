import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerDetailsComponent } from './dashboard/customer-details/customer-details.component';
import { SalesRepresentationComponent } from './dashboard/sales-representation/sales-representation.component';
import { FunnelChartComponent } from './dashboard/sales-representation/funnel-chart/funnel-chart.component';
import { CallsWinsRevenueComponent } from './dashboard/sales-representation/calls-wins-revenue/calls-wins-revenue.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CustomerDetailsComponent,
    SalesRepresentationComponent,
    FunnelChartComponent,
    CallsWinsRevenueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
