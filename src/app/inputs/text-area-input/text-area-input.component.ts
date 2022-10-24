import { Component, OnInit, forwardRef, ViewChild, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TextAreaInputComponentConfig } from 'src/app/models/text-area-component-config.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-text-area-input',
  templateUrl: './text-area-input.component.html',
  styleUrls: ['./text-area-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextAreaInputComponent),
      multi: true
    }
  ]
})
export class TextAreaInputComponent implements OnInit {

  @ViewChild('input') input :any;

  public debug: boolean;

  @Input() config: TextAreaInputComponentConfig;

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
