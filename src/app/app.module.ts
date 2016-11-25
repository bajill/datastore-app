import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartModule } from 'angular2-highcharts';
import { DataTableModule } from 'angular2-datatable';

import { AppService } from './app.service';

import { AppComponent } from './app.component';
import { NamespaceComponent } from './namespace/namespace.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

import { AppRoutingModule } from './app-routing.module';
import { ChartComponent } from './chart/chart.component';
import { DatastoreComponent } from './pages/datastore/datastore.component';
import { UserDatastoreComponent } from './pages/user-datastore/user-datastore.component';
import { TableComponent } from './table/table.component';
import { DataFilterPipe } from './data-filter.pipe';
import { OverviewComponent } from './pages/overview/overview.component';



@NgModule({
  declarations: [
    AppComponent,
    NamespaceComponent,
    HomeComponent,
    AboutComponent,
    ChartComponent,
    DatastoreComponent,
    UserDatastoreComponent,
    TableComponent,
    DataFilterPipe,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ChartModule,
    DataTableModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
