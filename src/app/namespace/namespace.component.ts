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
  private dataStore: boolean = false;
  private userDataStore: boolean = false;
  private encryptChecked: boolean = false;
  model = new AppNamespace('');

  constructor(private appService: AppService, private router: Router) {
    if(router.url === "/datastore") {
      this.dataStore = true;
      this.userDataStore = false;
      console.log("DATASTORE");
    } else if(router.url === "/userdatastore") {
      this.userDataStore = true;
      this.dataStore = false;
      console.log("USERDATASTORE" + this.userDataStore + this.dataStore);
    }
    this.loadList();
  }

  ngOnInit() {
  }

  loadList(): void {
    console.log('loading');
    
    if(this.dataStore) {
      this.appService.getFromDataStore('dataStore', '')
        .subscribe(res => this.updateList(res));
    } else if(this.userDataStore) {
      this.appService.getFromDataStore('userDataStore', '')
        .subscribe(res => this.updateList(res));
    }
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

    if(this.dataStore) {
      this.appService.getFromDataStore('dataStore', this.curNamespace)
        .subscribe(res => this.updateList(res));
    } else if(this.userDataStore) {
      this.appService.getFromDataStore('userDataStore', this.curNamespace)
        .subscribe(res => this.updateList(res));
    }
  }

  loadMetaData(path: string): void {
    if(this.dataStore) {
      this.appService.getFromDataStore('dataStore', this.curNamespace + 'metaData')
        .subscribe(res => this.listMetaData(res));
    }
  }

  loadValue(path: string): void {
    this.curNamespace += path + '/';

    if(this.dataStore) {
      this.appService.getFromDataStore('dataStore', this.curNamespace)
        .subscribe(res => this.listValues(res));
    } else if(this.userDataStore) {
      this.appService.getFromDataStore('userDataStore', this.curNamespace)
        .subscribe(res => this.listValues(res));
    }
  }

  updateInDataStore(): any {
    var newValue = (<HTMLInputElement>document.getElementById("key")).value;
    console.log('update ' + newValue);
    
    if(this.dataStore) {
      this.appService.updateInDataStore('dataStore', this.curNamespace, newValue)
        .subscribe(res => this.listValues(res));
    } else if(this.userDataStore) {
      this.appService.updateInDataStore('userDataStore', this.curNamespace, newValue)
        .subscribe(res => this.listValues(res));
    }

    this.updateOk = "Successfully updated value";
  }

  listMetaData(metaData): any {
    var key = "value";
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

    if(this.dataStore) {
      this.appService.getFromDataStore('dataStore', this.curNamespace)
        .subscribe(res => this.updateList(res));
    } else if(this.userDataStore) {
      this.appService.getFromDataStore('userDataStore', this.curNamespace)
        .subscribe(res => this.updateList(res));
    }
  }

  showNewButton(): void {
    if(this.depth === 1) {
      this.showNew = true;
    } else {
      this.showNew = false;
    }
  }

  showCreateNew(): void {
    if(this.newKeyValue) {
      this.newKeyValue = false;
    } else {
      this.newKeyValue = true;
    }
  }

  sendNewKeyValue(): void {
    var key: string = (<HTMLInputElement>document.getElementById("usr")).value;
    var tempValue: string = (<HTMLInputElement>document.getElementById("comment")).value;
    
    if(!key || !tempValue || key === "" || value === "") {
      alert("Empty key or value field, both needs to be filled out");
      return;
    }

    if(this.AppNamespace.some(x=>x===key)) {
      alert("Key with that name already exists in namespace, choose a different name.");
      return;
    }

    var value: string = JSON.stringify(tempValue);
    var fullpath: string = this.curNamespace;
    fullpath += key;

    this.newKeyValue = false;

    if(this.encryptChecked) {
      if(this.dataStore) {
        this.appService.createNewEncrypted('dataStore', fullpath, value)
          .subscribe(res => console.log(res));
      } else if(this.userDataStore) {
        this.appService.createNewEncrypted('userDataStore', fullpath, value)
          .subscribe(res => console.log(res));
      }
    } else if(!this.encryptChecked) {
      if(this.dataStore) {
        this.appService.createNew('dataStore', fullpath, value)
          .subscribe(res => console.log(res));
      } else if(this.userDataStore) {
        this.appService.createNew('userDataStore', fullpath, value)
          .subscribe(res => console.log(res));
      }
    }
    this.encryptChecked = false;
  }

  updateEncryptChecked(event): void {
    if(event.target.checked) {
      console.log("checked");
      this.encryptChecked = true;
    } else if(!event.target.checked) {
      console.log("not checked");
      this.encryptChecked = false;
    }
  }
}
