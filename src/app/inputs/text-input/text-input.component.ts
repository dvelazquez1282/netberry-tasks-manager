import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TextInputComponentConfig } from 'src/app/models/text-component-config.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true
    }
  ]
})
export class TextInputComponent implements OnInit, ControlValueAccessor {

  public debug: boolean;

  @Input() config: TextInputComponentConfig;

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

  ngOnInit(): void {
    this.debug = environment.debug;
  }

}
