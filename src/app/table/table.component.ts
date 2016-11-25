import { Component, OnInit } from '@angular/core';
import { MetaData } from './meta-data';
import { AppService } from './../app.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  appNamespace = [];
  keys: string[];
  path: string;
  keyJson: string;
  metaData: MetaData[];
  metaPath: string;
  public filterQuery = '';

  metaDataObjects = [];
  public data;

  constructor(private appService: AppService) {
    this.loadList();
  }

  loadList(): void {
    this.appService.getFromDataStore('dataStore', '')
      .subscribe(res => this.updateList(res));

  }

  updateList(appNamespaces): void {
    this.metaDataObjects = [];
    this.appNamespace = [];
    for (let i = 0; i < appNamespaces.length; i++) {
      this.appNamespace.push(appNamespaces[i]);
    }
    this.keys = [];

    for (let i = 0; i < this.appNamespace.length; i++) {
      this.appService.getFromDataStore('dataStore', this.appNamespace[i]).subscribe(res => { this.keys.push(res);
        this.getMetaData(res, this.appNamespace[i]);
      });
    }
  }

  getMetaData(key, namespace): void {

    for (let i = 0 ; i < key.length; i++) {
      this.metaPath = namespace + '/' + key[i] + '/metaData';
      this.appService.getFromDataStore('dataStore', this.metaPath).subscribe(res => {
        //console.log(namespace);
        //console.log(key[i]);
        //console.log(res['created']);
        //console.log(res['lastUpdated']);
        this.metaDataObjects.push(new MetaData(namespace, key[i], res['created'], res['lastUpdated']));
      });
    }
  }

  ngOnInit() {
  }

}
