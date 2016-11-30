import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataTableModule } from 'angular2-datatable';

import { AppService } from './app.service';

import { AppComponent } from './app.component';
import { NamespaceComponent } from './namespace/namespace.component';
import { HomeComponent } from './pages/home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { DatastoreComponent } from './pages/datastore/datastore.component';
import { UserDatastoreComponent } from './pages/user-datastore/user-datastore.component';
import { TableComponent } from './table/table.component';
import { DataFilterPipe } from './data-filter.pipe';
import { OverviewComponent } from './pages/overview/overview.component';
import { CssCarouselComponent } from './css-carousel/css-carousel.component';



@NgModule({
  declarations: [
    AppComponent,
    NamespaceComponent,
    HomeComponent,
    DatastoreComponent,
    UserDatastoreComponent,
    TableComponent,
    DataFilterPipe,
    OverviewComponent,
    CssCarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DataTableModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
