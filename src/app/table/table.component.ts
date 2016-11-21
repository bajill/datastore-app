import { Component, OnInit } from '@angular/core';
import { MetaData } from './meta-data';
import { AppService } from './../app.service';
import { AppNamespace } from './../namespace/namespace';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  appNamespace = [];
  keys = [];
  test: string;
  test2: string;

  constructor(private appService: AppService) { this.loadList(); }


  loadList(): void {
    this.appService.getFromDataStore('dataStore', '')
      .subscribe(res => this.updateList(res));
  }

  updateList(AppNamespaces): void {
    this.appNamespace = [];
    for (let i = 0; i < AppNamespaces.length; i++) {
      this.appNamespace.push(AppNamespaces[i]);
    }
    this.keys = [];

    for (let i = 0; i < this.appNamespace.length; i++) {
      this.appService.getFromDataStore('dataStore', this.appNamespace[i]).subscribe(res => { this.keys.push(res); });
    }


  }


  ngOnInit() {
  }

}
