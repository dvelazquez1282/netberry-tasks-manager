import { Component, OnInit, forwardRef, ViewChild, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectInputComponentConfig } from 'src/app/models/select-component-config.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectInputComponent),
      multi: true
    }
  ]
})
export class SelectInputComponent implements OnInit {

  @ViewChild('input') input :any;

  public debug: boolean;

  @Input() config: SelectInputComponentConfig;

  public _value: any;

  get value() {
    return this._value;
  }
  set value(v: any) {
    if(v !== this._value) {
      this._value = v;
      this.onChange(v)
    }    
  }


  constructor() { }


  onChange(_: any) {

  }
  onTouch() {

  }

  writeValue(obj: any): void {
    this._value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange=fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch=fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  valid(): boolean {
    return this.input.control.valid;
  }

  ngOnInit(): void {
    this.debug = environment.debug;
  }

}
