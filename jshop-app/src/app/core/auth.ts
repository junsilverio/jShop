import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _isLoggedIn = signal(false);

  constructor(private router: Router) {
    const stored = localStorage.getItem('jshop_auth');
    if (stored === 'true') this._isLoggedIn.set(true);
  }

  get isLoggedIn(): boolean {
    return this._isLoggedIn();
  }

  login(username: string, password: string): boolean {
    if (username && password) {
      this._isLoggedIn.set(true);
      localStorage.setItem('jshop_auth', 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    this._isLoggedIn.set(false);
    localStorage.removeItem('jshop_auth');
    this.router.navigate(['/login']);
  }
}
