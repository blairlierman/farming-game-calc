import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TouchCheckboxComponent } from './touch-checkbox/touch-checkbox.component';
import { TouchInputSpinnerComponent } from './touch-input-spinner/touch-input-spinner.component';
import { DollarAmountInputComponent } from './dollar-amount-input/dollar-amount-input.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        FontAwesomeModule
      ],
      declarations: [
        AppComponent,
        TouchCheckboxComponent,
        TouchCheckboxComponent,
        TouchInputSpinnerComponent,
        DollarAmountInputComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as default total amount $40,000`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.debugElement.componentInstance;
    expect(app.totalAmount).toEqual(40000);
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to FarmingGameNetAssetCalculator!');
  });
});
