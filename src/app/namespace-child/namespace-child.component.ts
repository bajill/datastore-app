import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { AppService } from './../app.service';
import { AppNamespace } from './../namespace/namespace';

@Component({
  selector: 'app-namespace-child',
  templateUrl: './namespace-child.component.html',
  styleUrls: ['./namespace-child.component.css']
})
export class NamespaceChildComponent implements OnInit {

    constructor(
        private appService: AppService,
    ) {this.loadList()}

    ngOnInit() {
    }

    public AppNamespace = [];
    private AppNamespaces;

    model = new AppNamespace('');

    loadList():void {
        console.log("loading")

    this.appService.loadDataStore()
        .subscribe(res => this.updateList(res))        
    }

    updateList(AppNamespaces):void {
        this.AppNamespace = [];
        for(let i = 0; i < AppNamespaces.length; i++) {
            this.AppNamespace.push(AppNamespaces[i]);
        }
    }
}
