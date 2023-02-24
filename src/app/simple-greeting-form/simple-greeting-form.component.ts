import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-simple-greeting-form',
  templateUrl: './simple-greeting-form.component.html',
  styleUrls: ['./simple-greeting-form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SimpleGreetingFormComponent),
      multi: true
    }
  ]
})

export class SimpleGreetingFormComponent implements ControlValueAccessor {
  // Initial state
  password: string = '';
  Weak = 'gray';
  Medium = 'gray';
  Strong = 'gray';
  isWeak: boolean = false;
  isMedium: boolean = false;
  isStrong: boolean = false;

  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(value: string): void {
    this.password = value;
    this.validatePassword();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  validatePassword() {
    // Condition if there are less than 8 values in the input
    if (this.password.length < 8) {
      this.isWeak = false;
      this.isMedium = false;
      this.isStrong = false;
      this.Weak = 'red';
      this.Medium = 'red';
      this.Strong = 'red';
      this.onChange('');

      return;
    }

    // Assignment of variables for validation
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasNumbers = /\d/.test(this.password);
    const hasSymbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(this.password);

    // Determining the content in the input
    const complexityLevel = (hasLetters ? 1 : 0) + (hasNumbers ? 1 : 0) + (hasSymbols ? 1 : 0);

    // Checking the received number from the variable
    switch (complexityLevel) {
      // First level
      case 1:
        this.isWeak = true;
        this.isMedium = true;
        this.isStrong = false;
        this.Weak = 'red';
        this.Medium = 'gray';
        this.Strong = 'gray';
        this.onChange(this.password);
        return;

      // Second level
      case 2:
        this.isWeak = false;
        this.isMedium = true;
        this.isStrong = false;
        this.Weak = 'yellow';
        this.Medium = 'yellow';
        this.Strong = 'gray';
        this.onChange(this.password);
        return;

      // Three level
      case 3:
        this.isWeak = false;
        this.isMedium = false;
        this.isStrong = true;
        this.Weak = 'green';
        this.Medium = 'green';
        this.Strong = 'green';
        this.onChange(this.password);
        return;
    }
  }

  onPasswordChange(event: any) {
    this.password = event.target.value;
    this.validatePassword();
  }
}
