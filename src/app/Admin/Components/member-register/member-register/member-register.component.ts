import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-member-register',
  templateUrl: './member-register.component.html',
  styleUrl: './member-register.component.css'
})

  export class RegisterMemberComponent implements OnInit {
    registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          this.forbiddenNameValidator('Bob') // Custom validator for forbidden name
        ]
      ],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // 10 digit phone number
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')
        ]
      ]
    });
  }

  get firstName() {
    return this.registerForm.get('firstName');
  }

  get lastName() {
    return this.registerForm.get('lastName');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get phoneNumber() {
    return this.registerForm.get('phoneNumber');
  }

  get password() {
    return this.registerForm.get('password');
  }

  // Custom validator for forbidden name
  forbiddenNameValidator(name: string) {
    return (control: any) => {
      if (control.value === name) {
        return { forbiddenName: true };
      }
      return null;
    };
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      // Handle form submission
    }
  }
  }
  


