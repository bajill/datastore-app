import { Component, OnInit } from '@angular/core';
import {ChartModule } from 'angular2-highcharts'; 

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  title = 'Statistics';

  constructor() { }

  ngOnInit() {
  }

}
