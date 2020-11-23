import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TouchCheckboxComponent } from './touch-checkbox.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('TouchCheckboxComponent', () => {
  let component: TouchCheckboxComponent;
  let fixture: ComponentFixture<TouchCheckboxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TouchCheckboxComponent ],
      imports: [
        FormsModule,
        FontAwesomeModule
      ]
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
