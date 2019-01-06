import { Component, OnInit, Input } from '@angular/core';
import { FunctionModel } from '../shared/function.model';

@Component({
  selector: 'app-graph-item',
  templateUrl: './graph-item.component.html',
  styleUrls: ['./graph-item.component.css']
})
export class GraphItemComponent implements OnInit {

  @Input() functionModel: FunctionModel

  ngOnInit() {
  }

}
