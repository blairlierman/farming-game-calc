import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-touch-input-spinner',
  templateUrl: './touch-input-spinner.component.html',
  styleUrls: ['./touch-input-spinner.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TouchInputSpinnerComponent),
      multi: true
    }
  ]
})
export class TouchInputSpinnerComponent implements ControlValueAccessor {

  @Input() step = 1;
  @Input() id: string;
  @Input() min = 0;

  @Input() inputValue: number;
  propagateChange = (_: any) => {};

  increment() {
    if (!this.inputValue) { this.inputValue = 0; }
    if (!this.step) { this.step = 1; }

    this.inputValue += (+this.step); // + casts this.step to a number to avoid string concatenation
    this.propagateChange(this.inputValue);
  }

  decrement() {
    if (!this.inputValue) { this.inputValue = 0; }
    if (!this.step) { this.step = 1; }

    const subtractedValue = this.inputValue - this.step;
    this.inputValue = subtractedValue < this.min ? this.min : subtractedValue;
    this.propagateChange(this.inputValue);
  }

  writeValue(value: number) {
    console.log(value);
    if (value !== undefined) {
      this.inputValue = value;
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

}
