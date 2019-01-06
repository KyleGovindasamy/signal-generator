import { Injectable } from '@angular/core';
import { FunctionModel } from '../shared/function.model';


@Injectable()
export class FunctionModelService {

  private functionModels: FunctionModel[] = [
    new FunctionModel('sin', 1, 1, 10,0,5),
    new FunctionModel('sin', 1, 1, 10,0,10),
    new FunctionModel('sin', 1, 1, 10,0,20),
    new FunctionModel('sin', 1, 1, 10,0,30)
  ];

  getFunctionModels() {
    return this.functionModels.slice();
  }

}
