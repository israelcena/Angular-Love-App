import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

type InputTypes = "text" | "email" | "password";

@Component({
  selector: 'app-default-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './default-input.component.html',
  styleUrl: './default-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DefaultInputComponent),
      multi: true
    }
  ]
})
export class DefaultInputComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() itemId: string = '';
  @Input() placeholder: string = '';
  @Input() type: InputTypes = "text";
  @Input() isMain: boolean = false;

  value: string = '';
  onChange: any = () => { };
  onTouched: any = () => { };

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.onChange(value);
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {

  }

}
