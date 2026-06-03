import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../core/auth';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
})
export class Topbar {
  @Output() toggleSidebar = new EventEmitter<void>();

  constructor(private auth: AuthService) {}

  logout() { this.auth.logout(); }
}
