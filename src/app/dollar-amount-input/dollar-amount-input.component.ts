import { Component, Output, EventEmitter, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-dollar-amount-input',
  templateUrl: './dollar-amount-input.component.html',
  styleUrls: ['./dollar-amount-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DollarAmountInputComponent),
      multi: true
    }
  ]
})
export class DollarAmountInputComponent implements ControlValueAccessor {

  @Input() showNegative: boolean;
  @Input() inputValue: number;

  propagateChange = (_: any) => {};

  onInputChanged(newValue: number) {
    this.inputValue = newValue;
    this.propagateChange(this.inputValue);
  }

  writeValue(value: number) {
    if (value !== undefined) {
      this.inputValue = value;
    }
  }

  registerOnChange(fn: (_: any) => void) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

}
