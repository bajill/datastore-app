import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartModule } from 'angular2-highcharts';


import { AppService } from './app.service';

import { AppComponent } from './app.component';
import { NavComponent } from './ui/nav/nav.component';
import { NamespaceComponent } from './namespace/namespace.component';
import { NamespaceChildComponent } from './namespace-child/namespace-child.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';

import { AppRoutingModule } from './app-routing.module';
import { ChartComponent } from './chart/chart.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NamespaceComponent,
    NamespaceChildComponent,
    HomeComponent,
    AboutComponent,
    StatisticsComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
