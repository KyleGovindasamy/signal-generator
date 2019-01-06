import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GraphComponent } from './graph/graph.component';
import { FunctionListComponent } from './function-list/function-list.component';
import { FunctionItemComponent } from './function-list/function-item/function-item.component';
import { FunctionParamsComponent } from './function-params/function-params.component';
import { GraphListComponent } from './graph-list/graph-list.component';
import { GraphItemComponent } from './graph-item/graph-item.component';
import { FunctionModelService } from './graph-list/modelFunction.services';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    FunctionListComponent,
    FunctionItemComponent,
    FunctionParamsComponent,
    GraphListComponent,
    GraphItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FunctionModelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
