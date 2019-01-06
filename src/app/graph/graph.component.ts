import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../../modules/canvasjs/canvasjs.min.js'

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
})
export class GraphComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let dataPoints = [];
    let dataPoints2 = [];

    let y = 0;
    var w  = 10;	
    var period = 1;	
    var ts = 0.001;
    for ( var i = 0; i < period; i+=ts ) {		  
      var sinY = Math.sin(i*w*2*3.14);	
      dataPoints.push({ x : i ,y : sinY});
    }

      var chart = new CanvasJS.Chart("chartContainer", {
      zoomEnabled: true,
      theme: 'dark2',
      lineThickness: 0.5,
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Performance Demo - 10000 DataPoints"
      },
      subtitles:[{
        text: "Try Zooming and Panning"
      }],
      data: [
      {
        type: "line",                
        dataPoints: dataPoints
      }
      ]
    });     
    chart.render();
  }
}
