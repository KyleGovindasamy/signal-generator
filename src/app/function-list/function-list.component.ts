import { Component, OnInit } from '@angular/core';
import { FunctionModel } from '../shared/function.model';

@Component({
  selector: 'app-function-list',
  templateUrl: './function-list.component.html',
  styleUrls: ['./function-list.component.css']
})
export class FunctionListComponent implements OnInit {

  functionModels: FunctionModel[];
  constructor() { }
  
  ngOnInit() {
    //this.functionModels.push(new FunctionModel('sine', 1 , 1, 10, 0,1,));
    //this.functionModels.push(new FunctionModel('cose', 10 , 1, 10, 0,1,));
    //this.functionModels.push(new FunctionModel('sinc', 100 , 1, 10, 0,1,));
    //this.functionModels.push(new FunctionModel('sec', 50 , 1, 10, 0,1,));
  }

}
