import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule
  ]
})
export class LoginComponent {

  loginForm: FormGroup;
  hidePassword = true;
  isLoading = false;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // ✅ LOGIN METHOD
  onSubmit() {

    if (this.loginForm.invalid) return;

    this.isLoading = true;
    this.errorMessage = '';

    const { email, password } = this.loginForm.value;

    this.authService.login(email, password)
      .then(() => {

        this.isLoading = false;

        const role = this.authService.getRole();

        if (role === 'admin') {
          this.router.navigate(['/admin-dashboard']);
        } else {
          this.router.navigate(['/dashboard']);
        }

      })
      .catch((error: any) => {

        this.isLoading = false;
        this.errorMessage = this.getErrorMessage(error);

        console.error(error);

      });
  }

  // ✅ PASSWORD TOGGLE
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  // ✅ ERROR HANDLING
  private getErrorMessage(error: any): string {
    if (error.code === 'auth/user-not-found') {
      return 'User not found';
    } else if (error.code === 'auth/wrong-password') {
      return 'Incorrect password';
    } else if (error.code === 'auth/invalid-email') {
      return 'Invalid email format';
    } else {
      return 'Login failed. Please try again.';
    }
  }

}