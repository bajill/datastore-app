import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';
import { AppNamespace } from './namespace';
import { Router } from '@angular/router';

@Component({
  selector: 'app-namespace',
  templateUrl: './namespace.component.html',
  styleUrls: ['./namespace.component.css']
})
export class NamespaceComponent implements OnInit {

  public AppNamespace = [];
  private curNamespace = '';
  private value;
  private metaData;
  private updateOk;
  private newKeyValue: boolean = false;
  private showNew: boolean = false;
  private depth: number = 0;

  private storeVersion;
  private encryptChecked: boolean = false;
  model = new AppNamespace('');



  constructor(private appService: AppService, private router: Router) {
    if (router.url === "/datastore") {
      this.storeVersion = "dataStore";
      console.log("DATASTORE");
    } else if (router.url === "/userdatastore") {
      this.storeVersion = "userDataStore";
      console.log("USERDATASTORE" + this.storeVersion);
    }else if(router.url === "/statistics"){
      
      return;
    }
    this.depth = 0;
    //this.resetValues();
    this.loadList();
  }

  ngOnInit() {
  }

  resetValues(): void {
    this.AppNamespace = [];
    this.curNamespace = '';
    this.value = '';
    this.metaData = '';
    this.updateOk = '';
    this.newKeyValue = false;
    this.showNew = false;
    this.depth = 0;
  }

  loadList(): void {
    console.log('loadingList');
    this.appService.getFromDataStore(this.storeVersion, '')
      .subscribe(res => this.updateList(res));

  }

  loadChild(path: string): void {
    this.depth++;
    this.newKeyValue = false;
    this.showNewButton();

    if (this.curNamespace !== '') {
      console.log('loadValues');
      this.AppNamespace = [];
      this.loadValue(path);
      this.loadMetaData(path);
      return;
    }

    this.curNamespace += path + '/';
    this.appService.getFromDataStore(this.storeVersion, this.curNamespace)
      .subscribe(res => this.updateList(res));

  }

  loadMetaData(path: string): void {
    if (this.storeVersion === 'dataStore') {
      this.appService.getFromDataStore(this.storeVersion, this.curNamespace + 'metaData')
        .subscribe(res => this.listMetaData(res));
    }
    return;
  }

  loadValue(path: string): void {
    this.curNamespace += path + '/';
    this.appService.getFromDataStore(this.storeVersion, this.curNamespace)
      .subscribe(res => this.listValues(res));

  }

  updateInDataStore(): any {
    var newValue = (<HTMLInputElement>document.getElementById('key')).value;
    console.log('update ' + newValue);

    this.appService.updateInDataStore(this.storeVersion, this.curNamespace, newValue)
      .subscribe(res => this.listValues(res));

    this.updateOk = 'Successfully updated value';
  }

  listMetaData(metaData): any {
    var key = 'value';
    delete metaData[key];
    this.metaData = JSON.stringify(metaData, null, 2);
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
    this.updateOk = '';
    this.value = '';
    this.metaData = '';
    this.depth--;
    this.showNewButton();
    this.newKeyValue = false;

    if (this.curNamespace.length > 0) {
      this.curNamespace = this.curNamespace.replace(new RegExp('([a-zA-Z0-9\_:-]+)/$'), '');
    }

    this.appService.getFromDataStore(this.storeVersion, this.curNamespace)
      .subscribe(res => this.updateList(res));

  }

  showNewButton(): void {
    if (this.depth === 1) {
      this.showNew = true;
    } else {
      this.showNew = false;
    }
  }

  showCreateNew(): void {
    if (this.newKeyValue) {
      this.newKeyValue = false;
    } else {
      this.newKeyValue = true;
    }
  }

  sendNewKeyValue(): void {
    var key: string = (<HTMLInputElement>document.getElementById("usr")).value;
    var tempValue: string = (<HTMLInputElement>document.getElementById("comment")).value;

    if (!key || !tempValue || key === "" || tempValue === "") {
      alert("Empty key or value field, both needs to be filled out");
      return;
    }

    if (this.AppNamespace.some(x => x === key)) {
      alert('Key with that name already exists in namespace, choose a different name.');
      return;
    }

    var value: string = JSON.stringify(tempValue);
    var fullpath: string = this.curNamespace;
    fullpath += key;
    this.newKeyValue = false;

    if (this.encryptChecked) {
      this.appService.createNewEncrypted(this.storeVersion, fullpath, value)
        .subscribe(res => console.log(res));
    } else if (!this.encryptChecked) {
      this.appService.createNew(this.storeVersion, fullpath, value)
        .subscribe(res => console.log(res));
    }
    this.encryptChecked = false;
  }

  updateEncryptChecked(event): void {
    if (event.target.checked) {
      console.log("checked");
      this.encryptChecked = true;
    } else if (!event.target.checked) {
      console.log("not checked");
      this.encryptChecked = false;
    }
  }
}
