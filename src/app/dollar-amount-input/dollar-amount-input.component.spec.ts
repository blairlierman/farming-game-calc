import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DollarAmountInputComponent } from './dollar-amount-input.component';
import { FormsModule } from '@angular/forms';

describe('DollarAmountInputComponent', () => {
  let component: DollarAmountInputComponent;
  let fixture: ComponentFixture<DollarAmountInputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DollarAmountInputComponent ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DollarAmountInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
