import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dollar-amount-input',
  templateUrl: './dollar-amount-input.component.html',
  styleUrls: ['./dollar-amount-input.component.scss']
})
export class DollarAmountInputComponent implements OnInit {

  @Output() dollarAmountOutput = new EventEmitter<number>();

  inputValue: number;

  constructor() { }

  ngOnInit() {
  }

  onInputChanged(newValue: number) {
    this.inputValue = newValue;
    this.dollarAmountOutput.emit(this.inputValue);
  }

}
