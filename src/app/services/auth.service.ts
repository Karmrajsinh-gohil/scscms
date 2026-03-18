import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: Auth,
    private router: Router
  ) {}

  // LOGIN
  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {

        // Store user info in localStorage
        const user = userCredential.user;

        localStorage.setItem('user', JSON.stringify(user));

        // OPTIONAL: Role (for demo)
        const role = email.includes('admin') ? 'admin' : 'user';
        localStorage.setItem('role', role);

      });
  }

  // LOGOUT
  logout() {
    signOut(this.auth).then(() => {
      localStorage.clear();
      this.router.navigate(['/login']);
    });
  }

  // CHECK LOGIN
  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  // GET ROLE
  getRole(): string | null {
    return localStorage.getItem('role');
  }

}