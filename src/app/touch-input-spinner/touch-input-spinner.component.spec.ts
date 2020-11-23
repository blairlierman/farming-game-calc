import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TouchInputSpinnerComponent } from './touch-input-spinner.component';
import { FormsModule } from '@angular/forms';

describe('InputSpinnerComponent', () => {

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TouchInputSpinnerComponent ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(TouchInputSpinnerComponent);
    const component: TouchInputSpinnerComponent = fixture.componentInstance;

    expect(component).toBeTruthy();
  });

  it('should increment by 1 with defaults', () => {
    const fixture = TestBed.createComponent(TouchInputSpinnerComponent);
    const component: TouchInputSpinnerComponent = fixture.componentInstance;

    component.increment();

    expect(component.inputValue).toEqual(1);
  });

  it('should increment by passed value of 10', () => {
    const fixture = TestBed.createComponent(TouchInputSpinnerComponent);
    const component: TouchInputSpinnerComponent = fixture.componentInstance;

    component.inputValue = 10;
    component.step = 10;

    component.increment();

    expect(component.inputValue).toEqual(20);
  });

  it('should attempt to decrement by 1 with default min of 0', () => {
    const fixture = TestBed.createComponent(TouchInputSpinnerComponent);
    const component: TouchInputSpinnerComponent = fixture.componentInstance;

    component.decrement();

    expect(component.inputValue).toEqual(0);
  });

  it('should attempt to decrement by 1', () => {
    const fixture = TestBed.createComponent(TouchInputSpinnerComponent);
    const component: TouchInputSpinnerComponent = fixture.componentInstance;
    component.inputValue = 10;

    component.decrement();

    expect(component.inputValue).toEqual(9);
  });

  it('should decrement by passed value of 10', () => {
    const fixture = TestBed.createComponent(TouchInputSpinnerComponent);
    const component: TouchInputSpinnerComponent = fixture.componentInstance;
    component.inputValue = 10;
    component.step = 10;

    component.decrement();

    expect(component.inputValue).toEqual(0);
  });
});
