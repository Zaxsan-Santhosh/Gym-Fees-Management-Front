import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-member-register',
  templateUrl: './member-register.component.html',
  styleUrl: './member-register.component.css'
})

  export class RegisterMemberComponent implements OnInit {
    registerForm: FormGroup;

    constructor(private fb: FormBuilder) {
      this.registerForm = this.fb.group({
        firstName: ['', [Validators.required, Validators.minLength(4)]],
        lastName: ['', [Validators.required, Validators.minLength(4)]],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
        password: [
          '',
          [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)]
        ],
        nic: ['', Validators.required],
        age: ['', Validators.required],
        gender: ['', Validators.required],
        height: [''],
        weight: [''],
        creationDate: [''],
        address: [''],
        profileImage: [null],
        userRole: ['', Validators.required]
        
      });

      this.registerForm.statusChanges.subscribe(status => {
        console.log('Form status:', status); // Should show 'VALID' or 'INVALID'
      });
    }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
    onSubmit() {
      if (this.registerForm.valid) {
        console.log(this.registerForm.value);
      }
    }
  
    isFieldInvalid(field: string): boolean {
      const control = this.registerForm.get(field);
      return control ? control.invalid && (control.dirty || control.touched) : false;
    }
  
    onFileSelect(event: Event) {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        this.registerForm.patchValue({ profileImage: file });
      }
    }

      clearErrorMessage(field: string): void {
    const control = this.registerForm.get(field);
    if (control?.dirty || control?.touched) {
      control.markAsUntouched();
    }
  }
  
  
  }

