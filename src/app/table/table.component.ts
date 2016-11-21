import { Component, OnInit } from '@angular/core';
import { MetaData } from './meta-data';
import { NamespaceComponent } from './../namespace/namespace.component';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private nspace: NamespaceComponent) {
   }


  ngOnInit() {
  }

}
