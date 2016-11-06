import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() {

    this.options = {
      title : { text: 'Chart test'},
      series: [{
        data: [25, 23.3, 15, 12],
      }]
    };

   }

   options: Object;




  ngOnInit() {
  }

}
