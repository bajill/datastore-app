import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { AppService } from './../app.service';
import { AppNamespace } from './namespace';

@Component({
  selector: 'app-namespace',
  templateUrl: './namespace.component.html',
  styleUrls: ['./namespace.component.css']
})
export class NamespaceComponent implements OnInit {

  constructor(private appService: AppService) {
    this.loadList()
  }

  ngOnInit() {
  }

  public AppNamespace = [];
  private AppNamespaces;
  private curNamespace = "";
  private value;

  model = new AppNamespace('');

  loadList():void {
    console.log("loading")
    this.appService.loadDataStore()
    .subscribe(res => this.updateList(res))        
  }

  loadChild(path: string):void {
    console.log(this.curNamespace)
    if(this.curNamespace !== ""){
      console.log("notempty")
      this.loadValue(path)
      return
    }

    this.curNamespace += path + "/"    
    this.appService.loadChild(this.curNamespace)
    .subscribe(res => this.updateList(res))  
  }
  
  loadValue(path: string): void {
    this.curNamespace += path + "/"
    this.appService.loadChild(this.curNamespace)
    .subscribe(res => this.value)
  }

  updateValues(AppNamespaces): void {
    
  }

  updateList(AppNamespaces):void {
    this.AppNamespace = [];
    for(let i = 0; i < AppNamespaces.length; i++) {
            this.AppNamespace.push(AppNamespaces[i]);
    }
  }

  loadBack():void {
    if (this.curNamespace.length > 0){
    this.curNamespace = this.curNamespace.replace(new RegExp("([a-zA-Z0-9\_:-]+)/$"), "");
  }
    this.appService.loadBack(this.curNamespace)
    .subscribe(res => this.updateList(res))  

  }

}
