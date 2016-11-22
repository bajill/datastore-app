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
  keys: string[];
  path: string;
  keyJson: string;
  metaData: MetaData[];
  metaPath: string;



  constructor(private appService: AppService) { this.loadList(); }


  loadList(): void {
    this.appService.getFromDataStore('dataStore', '')
      .subscribe(res => this.updateList(res));


  }

  updateList(appNamespaces): void {
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
    console.log(namespace);
    for (let i = 0 ; i < key.length; i++) {
      this.metaPath = namespace + '/' + key[i] + '/metaData';
      this.appService.getFromDataStore('dataStore', this.metaPath).subscribe(res => {
        console.log(res);
      });

    }

  }

  ngOnInit() {
  }

}
