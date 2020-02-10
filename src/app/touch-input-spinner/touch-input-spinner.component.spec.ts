import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchInputSpinnerComponent } from './touch-input-spinner.component';

describe('InputSpinnerComponent', () => {
  let component: TouchInputSpinnerComponent;
  let fixture: ComponentFixture<TouchInputSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouchInputSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchInputSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
