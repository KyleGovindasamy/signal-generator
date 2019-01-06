import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionParamsComponent } from './function-params.component';

describe('FunctionParamsComponent', () => {
  let component: FunctionParamsComponent;
  let fixture: ComponentFixture<FunctionParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
