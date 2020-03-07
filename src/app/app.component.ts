import { Component } from '@angular/core';
import { faCheckSquare, faSquare, IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faSquare: IconDefinition = faSquare;
  faCheckSquare: IconDefinition = faCheckSquare;
  totalAmount = 0;
  hayAmount = 0;
  grainAmount = 0;
  fruitAmount = 0;
  cowAmount = 0;
  tractorAmount = 0;
  harvesterAmount = 0;
  cashAmount = 0;
  cashPhrase = 'Fill in the Assets to begin counting';
  hasHarvesterValue: boolean;

  hayAcresChanged(input: number) {
    console.log(input);

    this.hayAmount = input * 2000;
    this.calculateTotal();

  }

  grainAcresChanged(input: number) {
    this.grainAmount = input * 2000;
    this.calculateTotal();
  }

  fruitAcresChanged(input: number) {
    this.fruitAmount = input * 5000;
    this.calculateTotal();
  }

  cowsChanged(input: number) {
    this.cowAmount = input * 500;
    this.calculateTotal();
  }

  tractorChanged(checked: boolean) {
    this.tractorAmount = checked ? 10000 : 0;
    this.calculateTotal();
  }

  harvesterChanged(checked: boolean) {
    this.harvesterAmount = checked ? 10000 : 0;
    this.calculateTotal();
  }

  cashChanged(cash: string) {
    const cashInt = parseInt(cash, 10) || 0;
    this.cashAmount = cashInt;
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalAmount = this.hayAmount + this.grainAmount
      + this.fruitAmount + this.cowAmount
      + this.harvesterAmount + this.tractorAmount
      + this.cashAmount;

    if (this.totalAmount > 0) {
      this.cashPhrase = `You have \$${this.totalAmount} in Net Assets!`;
    } else {
      this.cashPhrase = 'Fill in the Assets to begin counting';
    }
  }

  onResetClicked() {
    this.hayAmount = 10;
    this.grainAmount = 10;
    this.fruitAmount = null;
    this.cashAmount = null;
    this.hasHarvesterValue = false;
  }
}
