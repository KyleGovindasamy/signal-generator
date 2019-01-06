import { Component, OnInit } from '@angular/core';
import {FunctionModel} from '../shared/function.model'

import { FunctionModelService } from '../graph-list/modelFunction.services';

@Component({
  selector: 'app-graph-list',
  templateUrl: './graph-list.component.html',
  styleUrls: ['./graph-list.component.css']
})
export class GraphListComponent implements OnInit {
  functionModels: FunctionModel[];

  constructor(private functionModelService: FunctionModelService) { }
 
  ngOnInit() {
    this.functionModels = this.functionModelService.getFunctionModels();
  }


}
