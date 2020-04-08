import { Component, Input, forwardRef, ElementRef, Renderer, Renderer2, OnInit, HostListener } from '@angular/core';
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
export class TouchCheckboxComponent implements ControlValueAccessor, OnInit {
  @Input() id: string;

  @Input() inputValue: boolean;

  faSquare: IconDefinition = faSquare;
  faCheckSquare: IconDefinition = faCheckSquare;
  inputFocusClass: boolean;

  propagateChange = (_: any) => { };

  _setInputFocus(isFocus: boolean) {
    this.inputFocusClass = isFocus;
  }

  constructor(private el: ElementRef, public renderer: Renderer2) {
    // give the entire component a tabindex
    this.renderer.setAttribute(this.el.nativeElement, 'tabindex', '0');
  }

  @HostListener('focus', ['$event'])
  onFocus() {
    this._setInputFocus(true);
  }

  @HostListener('blur', ['$event'])
  onBlur() {
    this._setInputFocus(false);
  }

  // React to the enter and space key to change the input value, like a regular checkbox
  @HostListener('keyup.space', ['$event'])
  @HostListener('keyup.enter', ['$event'])
  onKeyUp() {
    this.onInputChanged(!this.inputValue);
  }

  ngOnInit() {
    this.inputFocusClass = false;
  }

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

  registerOnTouched() { }

}
