import { Component, Input, forwardRef } from '@angular/core';
import { faCheckSquare, faSquare, IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-touch-checkbox',
  templateUrl: './touch-checkbox.component.html',
  styleUrls: ['./touch-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TouchCheckboxComponent),
      multi: true
    }
  ]
})
export class TouchCheckboxComponent implements ControlValueAccessor {
  @Input() id: string;

  @Input() inputValue: boolean;

  faSquare: IconDefinition = faSquare;
  faCheckSquare: IconDefinition = faCheckSquare;

  propagateChange = (_: any) => {};

  constructor() { }

  onInputChanged(newValue: boolean) {
    console.log(`inputChanged: ${newValue}`);
    this.inputValue = newValue;
    this.propagateChange(this.inputValue);
  }

  writeValue(value: boolean) {
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
