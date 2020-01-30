import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-spinner',
  templateUrl: './input-spinner.component.html',
  styleUrls: ['./input-spinner.component.scss']
})
export class InputSpinnerComponent implements OnInit {

  @Input() label: string;
  @Input() step: number = null;
  @Input() id: string;
  @Output() value = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onInputChanged(inputValue: number) {
    this.value.emit(inputValue);
  }

}
