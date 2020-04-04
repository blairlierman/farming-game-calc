import { Component } from '@angular/core';
import { faCheckSquare, faSquare, IconDefinition } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faSquare: IconDefinition = faSquare;
  faCheckSquare: IconDefinition = faCheckSquare;
  totalAmount = 40000;
  hayAmount = 20000;
  grainAmount = 20000;
  fruitAmount = 0;
  cowAmount = 0;
  tractorAmount = 0;
  harvesterAmount = 0;
  cashAmount = 0;
  debtAmount = 0;
  // ngModel variables
  hayAcres = 10;
  grainAcres = 10;
  fruitAcres: number;
  numberOfCows: number;
  cashInHand: string;
  debt: string;
  hasTractor: boolean;
  hasHarvesterValue: boolean;

  hayAcresChanged(input: number) {
    console.log(input);
    this.hayAcres = input;
    this.hayAmount = input * 2000;
    this.calculateTotal();
  }

  grainAcresChanged(input: number) {
    this.grainAcres = input;
    this.grainAmount = input * 2000;
    this.calculateTotal();
  }

  fruitAcresChanged(input: number) {
    this.fruitAcres = input;
    this.fruitAmount = input * 5000;
    this.calculateTotal();
  }

  cowsChanged(input: number) {
    this.numberOfCows = input;
    this.cowAmount = input * 500;
    this.calculateTotal();
  }

  tractorChanged(checked: boolean) {
    this.hasTractor = checked;
    this.tractorAmount = checked ? 10000 : 0;
    this.calculateTotal();
  }

  harvesterChanged(checked: boolean) {
    this.hasHarvesterValue = checked;
    this.harvesterAmount = checked ? 10000 : 0;
    this.calculateTotal();
  }

  cashChanged(cash: string) {
    this.cashInHand = cash;
    const cashInt = parseInt(cash, 10) || 0;
    this.cashAmount = cashInt;
    this.calculateTotal();
  }

  debtChanged(debt: string) {
    let debtInt = parseInt(debt, 10) || 0;
    // If a negative value is entered, just make it positive. We subtract it later
    if (debtInt < 0) { debtInt = debtInt * -1; }
    this.debtAmount = debtInt;
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalAmount = this.hayAmount + this.grainAmount
      + this.fruitAmount + this.cowAmount
      + this.harvesterAmount + this.tractorAmount
      + this.cashAmount - this.debtAmount;
  }

  onResetClicked() {
    this.hayAcres = 10;
    this.grainAcres = 10;
    this.fruitAcres = null;
    this.numberOfCows = null;
    this.cashInHand = null;
    this.hasHarvesterValue = false;
    this.hasTractor = false;
    this.totalAmount = 40000;
    this.hayAmount = 20000;
    this.grainAmount = 20000;
    this.fruitAmount = 0;
    this.cowAmount = 0;
    this.tractorAmount = 0;
    this.harvesterAmount = 0;
    this.cashAmount = 0;
    this.calculateTotal();
  }
}
