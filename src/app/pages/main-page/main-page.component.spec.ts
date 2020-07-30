import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageComponent } from './main-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { TouchCheckboxComponent } from '../../touch-checkbox/touch-checkbox.component';
import { TouchInputSpinnerComponent } from '../../touch-input-spinner/touch-input-spinner.component';
import { DollarAmountInputComponent } from '../../dollar-amount-input/dollar-amount-input.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('MainPageComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        FontAwesomeModule
      ],
      declarations: [
        MainPageComponent,
        TouchCheckboxComponent,
        TouchCheckboxComponent,
        TouchInputSpinnerComponent,
        DollarAmountInputComponent
      ],
    }).compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(MainPageComponent);
    const component: MainPageComponent = fixture.debugElement.componentInstance;

    expect(component).toBeTruthy();
  });

  it(`should have as default total amount $40,000`, () => {
    const fixture = TestBed.createComponent(MainPageComponent);
    const app: MainPageComponent = fixture.debugElement.componentInstance;
    expect(app.totalAmount).toEqual(40000);
  });

  it('should render totalAmount as dollar amount in a h3 tag', () => {
    const fixture = TestBed.createComponent(MainPageComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#totalAmount').textContent).toContain('$40,000');
  });

  it('should calculate the total amount from all different amounts', () => {
    const fixture = TestBed.createComponent(MainPageComponent);
    const app: MainPageComponent = fixture.debugElement.componentInstance;
    app.cashAmount = 10000;
    app.hayAmount = 10000;
    app.harvesterAmount = 10000;
    app.tractorAmount = 10000;
    app.grainAmount = 10000;
    app.cowAmount = 10000;
    app.fruitAmount = 10000;

    app.calculateTotal();

    expect(app.totalAmount).toEqual(70000);
  });

  it('should calculate the total amount and subtract debt', () => {
    const fixture = TestBed.createComponent(MainPageComponent);
    const app: MainPageComponent = fixture.debugElement.componentInstance;
    app.cashAmount = 10000;
    app.hayAmount = 10000;
    app.harvesterAmount = 10000;
    app.tractorAmount = 10000;
    app.grainAmount = 10000;
    app.cowAmount = 10000;
    app.fruitAmount = 10000;

    app.debtAmount = 70000;
    app.calculateTotal();

    expect(app.totalAmount).toEqual(0);
  });

  it('should update Hay acres and amounts when Hay acres are changed', () => {
    const fixture = TestBed.createComponent(MainPageComponent);
    const app: MainPageComponent = fixture.debugElement.componentInstance;

    app.hayAcresChanged(100);

    expect(app.hayAcres).toEqual(100);
    expect(app.hayAmount).toEqual(200000);
    expect(app.totalAmount).toEqual(220000); // includes Grain Amount

  });

  it('should update Grain acres and amounts when Grain acres are changed', () => {
    const fixture = TestBed.createComponent(MainPageComponent);
    const app: MainPageComponent = fixture.debugElement.componentInstance;

    app.grainAcresChanged(100);

    expect(app.grainAcres).toEqual(100);
    expect(app.grainAmount).toEqual(200000);
    expect(app.totalAmount).toEqual(220000); // includes Hay Amount

  });

  it('should update Fruit acres and amounts when Fruit acres are changed', () => {
    const fixture = TestBed.createComponent(MainPageComponent);
    const app: MainPageComponent = fixture.debugElement.componentInstance;

    app.fruitAcresChanged(100);

    expect(app.fruitAcres).toEqual(100);
    expect(app.fruitAmount).toEqual(500000);
    expect(app.totalAmount).toEqual(540000); // includes Hay and Grain Amounts

  });

  it('should update number of cows and amounts when Cows are changed', () => {
    const fixture = TestBed.createComponent(MainPageComponent);
    const app: MainPageComponent = fixture.debugElement.componentInstance;

    app.cowsChanged(100);

    expect(app.numberOfCows).toEqual(100);
    expect(app.cowAmount).toEqual(50000);
    expect(app.totalAmount).toEqual(90000); // includes Hay and Grain Amounts

  });

  it('should update total amount when Has Tractor is changed', () => {
    const fixture = TestBed.createComponent(MainPageComponent);
    const app: MainPageComponent = fixture.debugElement.componentInstance;

    app.tractorChanged(true);

    expect(app.hasTractor).toBeTruthy();
    expect(app.tractorAmount).toEqual(10000);
    expect(app.totalAmount).toEqual(50000); // includes Hay and Grain Amounts (40000)

    app.tractorChanged(false);

    expect(app.hasTractor).toBeFalsy();
    expect(app.tractorAmount).toEqual(0);
    expect(app.totalAmount).toEqual(40000); // includes Hay and Grain Amounts (40000)

  });

  it('should update total amount when Has Harvested is changed', () => {
    const fixture = TestBed.createComponent(MainPageComponent);
    const app: MainPageComponent = fixture.debugElement.componentInstance;

    app.harvesterChanged(true);

    expect(app.hasHarvesterValue).toBeTruthy();
    expect(app.harvesterAmount).toEqual(10000);
    expect(app.totalAmount).toEqual(50000); // includes Hay and Grain Amounts (40000)

    app.harvesterChanged(false);

    expect(app.hasHarvesterValue).toBeFalsy();
    expect(app.harvesterAmount).toEqual(0);
    expect(app.totalAmount).toEqual(40000); // includes Hay and Grain Amounts (40000)
  });

  it('should update total amount when Cash Amount is changed', () => {
    const fixture = TestBed.createComponent(MainPageComponent);
    const app: MainPageComponent = fixture.debugElement.componentInstance;

    app.cashChanged('12345');

    expect(app.cashInHand).toEqual('12345');
    expect(app.cashAmount).toEqual(12345);
    expect(app.totalAmount).toEqual(40000 + 12345); // includes Hay and Grain Amounts (40000)
  });

  it('should subtract from total amount when Debt Amount is changed', () => {
    const fixture = TestBed.createComponent(MainPageComponent);
    const app: MainPageComponent = fixture.debugElement.componentInstance;

    app.debtChanged('12345');

    expect(app.debt).toEqual('12345');
    expect(app.debtAmount).toEqual(12345);
    expect(app.totalAmount).toEqual(40000 - 12345); // includes Hay and Grain Amounts (40000)
  });

  it('should subtract from total amount when Debt Amount even when debt is passed as negative', () => {
    const fixture = TestBed.createComponent(MainPageComponent);
    const app: MainPageComponent = fixture.debugElement.componentInstance;

    app.debtChanged('-12345');

    expect(app.debt).toEqual('-12345');
    expect(app.debtAmount).toEqual(12345);
    expect(app.totalAmount).toEqual(40000 - 12345); // includes Hay and Grain Amounts (40000)
  });

  it('should calculate proper total amount when other amounts are set', () => {
    const fixture = TestBed.createComponent(MainPageComponent);
    const app: MainPageComponent = fixture.debugElement.componentInstance;
    app.hayAmount = 10000;
    app.grainAmount = 10000;
    app.fruitAmount = 10000;
    app.cowAmount = 10000;
    app.harvesterAmount = 10000;
    app.tractorAmount = 10000;
    app.cashAmount = 10000;
    app.debtAmount = 10000;

    app.calculateTotal();

    expect(app.totalAmount).toEqual(60000);
  });

  it('should reset to default amount and values when resetClicked called', () => {
    const fixture = TestBed.createComponent(MainPageComponent);
    const app: MainPageComponent = fixture.debugElement.componentInstance;
    app.hayAmount = 10000;
    app.grainAmount = 10000;
    app.fruitAmount = 10000;
    app.cowAmount = 10000;
    app.harvesterAmount = 10000;
    app.tractorAmount = 10000;
    app.cashAmount = 10000;
    app.debtAmount = 10000;
    app.hayAcres = 5;
    app.grainAcres = 5;
    app.fruitAcres = 2;
    app.numberOfCows = 20;
    app.hasTractor = true;
    app.hasHarvesterValue = true;
    app.cashInHand = '10000';
    app.debt = '10000';
    app.totalAmount = 60000;

    app.onResetClicked();

    expect(app.totalAmount).toEqual(40000);
    expect(app.hayAmount).toEqual(20000);
    expect(app.grainAmount).toEqual(20000);
    expect(app.fruitAmount).toEqual(0);
    expect(app.cowAmount).toEqual(0);
    expect(app.harvesterAmount).toEqual(0);
    expect(app.tractorAmount).toEqual(0);
    expect(app.cashAmount).toEqual(0);
    expect(app.debtAmount).toEqual(0);
    expect(app.hayAcres).toEqual(10);
    expect(app.grainAcres).toEqual(10);
    expect(app.fruitAcres).toBeNull();
    expect(app.numberOfCows).toBeNull();
    expect(app.hasTractor).toBeFalsy();
    expect(app.hasHarvesterValue).toBeFalsy();
    expect(app.cashInHand).toBeNull();
    expect(app.debt).toBeNull();

  });
});
