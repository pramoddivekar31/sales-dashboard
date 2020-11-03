import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerDetailsComponent } from './dashboard/customer-details/customer-details.component';
import { SalesRepresentationComponent } from './dashboard/sales-representation/sales-representation.component';
import { FunnelChartComponent } from './dashboard/sales-representation/funnel-chart/funnel-chart.component';
import { CallsWinsRevenueComponent } from './dashboard/sales-representation/calls-wins-revenue/calls-wins-revenue.component';
import { CustomerStatisticsComponent } from './dashboard/customer-statistics/customer-statistics.component';
import { StatisticCardsComponent } from './dashboard/customer-statistics/statistic-cards/statistic-cards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CustomerDetailsComponent,
    SalesRepresentationComponent,
    FunnelChartComponent,
    CallsWinsRevenueComponent,
    CustomerStatisticsComponent,
    StatisticCardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
