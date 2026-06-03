import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  username = '';
  password = '';
  error = signal('');
  loading = signal(false);

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    this.error.set('');
    if (!this.username || !this.password) {
      this.error.set('Please enter your credentials.');
      return;
    }
    this.loading.set(true);
    setTimeout(() => {
      const ok = this.auth.login(this.username, this.password);
      this.loading.set(false);
      if (ok) this.router.navigate(['/home']);
      else this.error.set('Invalid username or password.');
    }, 600);
  }
}
