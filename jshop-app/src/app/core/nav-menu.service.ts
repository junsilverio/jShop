import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface NavItem {
  label: string;
  icon: string;
  route?: string;
  children?: NavItem[];
}

@Injectable({ providedIn: 'root' })
export class NavMenuService {
  constructor(private http: HttpClient) {}

  getNavItems(): Observable<NavItem[]> {
    return this.http.get<NavItem[]>('/nav-items.json');
  }
}
