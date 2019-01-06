import { Component, OnInit,Input } from '@angular/core';
import {FunctionModel} from '../../shared/function.model'
import { FunctionModelService } from '../../graph-list/modelFunction.services';

@Component({
  selector: 'app-function-item',
  templateUrl: './function-item.component.html',
  styleUrls: ['./function-item.component.css']
})
export class FunctionItemComponent implements OnInit {
  
  functionModels: FunctionModel[];
  functions = ['sine', 'cosine', 'sec'];
  
  constructor(private functionModelService: FunctionModelService) { }

  ngOnInit() {
    this.functionModels = this.functionModelService.getFunctionModels();
  }

}
