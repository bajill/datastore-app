import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartModule } from 'angular2-highcharts';


import { AppService } from './app.service';

import { AppComponent } from './app.component';
import { NamespaceComponent } from './namespace/namespace.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';

import { AppRoutingModule } from './app-routing.module';
import { ChartComponent } from './chart/chart.component';
import { DatastoreComponent } from './pages/datastore/datastore.component';
import { UserDatastoreComponent } from './pages/user-datastore/user-datastore.component';


@NgModule({
  declarations: [
    AppComponent,
    NamespaceComponent,
    HomeComponent,
    AboutComponent,
    StatisticsComponent,
    ChartComponent,
    DatastoreComponent,
    UserDatastoreComponent
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
