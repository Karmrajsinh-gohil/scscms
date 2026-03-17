import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';


// Custom validator to match password and confirm password
export const passwordMatchValidator: ValidatorFn = (control: AbstractControl) => {
  const password = control.get('password');
  const confirm = control.get('confirmPassword');

  if (password && confirm && password.value !== confirm.value) {
    return { passwordMismatch: true };
  }

  return null;
};


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup;

  hidePassword = true;
  hideConfirm = true;

  constructor(
    private fb: FormBuilder,
    private auth: Auth,
    private firestore: Firestore
  ) {

    this.registerForm = this.fb.group(
      {
        fullName: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
      },
      { validators: passwordMatchValidator }
    );

  }


  async onSubmit() {

    if (this.registerForm.invalid) {
      return;
    }

    const fullName = this.registerForm.value.fullName;
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;

    try {

      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      const uid = userCredential.user.uid;

      // Save extra user data in Firestore
      await setDoc(doc(this.firestore, "users", uid), {
        fullName: fullName,
        email: email,
        role: "citizen",
        createdAt: new Date()
      });

      alert("Registration Successful!");

      console.log("User Registered:", userCredential.user);

      this.registerForm.reset();

    } catch (error: any) {

      console.error("Firebase Error:", error);
      alert(error.message);

    }

  }


  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }


  toggleConfirmVisibility() {
    this.hideConfirm = !this.hideConfirm;
  }

}