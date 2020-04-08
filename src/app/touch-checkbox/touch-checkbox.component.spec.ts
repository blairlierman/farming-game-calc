import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchCheckboxComponent } from './touch-checkbox.component';

describe('TouchCheckboxComponent', () => {
  let component: TouchCheckboxComponent;
  let fixture: ComponentFixture<TouchCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouchCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
