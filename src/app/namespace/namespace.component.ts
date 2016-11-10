import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';
import { AppNamespace } from './namespace';

@Component({
  selector: 'app-namespace',
  templateUrl: './namespace.component.html',
  styleUrls: ['./namespace.component.css']
})
export class NamespaceComponent implements OnInit {

  constructor(private appService: AppService) {
    this.loadList();
  }

  ngOnInit() {
  }

  public AppNamespace = [];
  private curNamespace = '';
  private value;
  private metaData;

  model = new AppNamespace('');

  loadList(): void {
    console.log('loading');
    this.appService.getFromDataStore('')
    .subscribe(res => this.updateList(res));
  }

  loadChild(path: string): void {

    if (this.curNamespace !== '') {
      console.log('loadValues');
      this.AppNamespace = [];
      this.loadValue(path);
      this.loadMetaData(path);
      return;
    }

    this.curNamespace += path + '/';
    this.appService.getFromDataStore(this.curNamespace)
    .subscribe(res => this.updateList(res));
  }

  loadMetaData(path: string): void {
    this.appService.getFromDataStore(this.curNamespace + 'metaData')
    .subscribe(res => this.listMetaData(res));
  }

  loadValue(path: string): void {
    this.curNamespace += path + '/';
    this.appService.getFromDataStore(this.curNamespace)
    .subscribe(res => this.listValues(res));

  }

  updateInDataStore(newValue: string): any {
    console.log('update ' + newValue);
    this.appService.updateInDataStore(this.curNamespace, newValue)
    .subscribe(res => this.listValues(res));
  }

  listMetaData(MetaData): any {
    this.metaData = JSON.stringify(MetaData, null, 2);
  }

  listValues(AppNamespaces): void {
    this.value = JSON.stringify(AppNamespaces, null, 2);
    console.log(this.value);
  }

  updateList(AppNamespaces): void {
    this.AppNamespace = [];
    for (let i = 0; i < AppNamespaces.length; i++) {
            this.AppNamespace.push(AppNamespaces[i]);
    }
  }

  loadBack(): void {
    this.value = '';
    this.metaData = '';
    if (this.curNamespace.length > 0) {
    this.curNamespace = this.curNamespace.replace(new RegExp('([a-zA-Z0-9\_:-]+)/$'), '');
  }
    this.appService.getFromDataStore(this.curNamespace)
    .subscribe(res => this.updateList(res));

  }

}
