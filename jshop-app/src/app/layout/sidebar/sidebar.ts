import { Component, Input, OnInit, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavItem, NavMenuService } from '../../core/nav-menu.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar implements OnInit {
  @Input() collapsed = false;

  openMenus = signal<Set<string>>(new Set());
  navItems: NavItem[] = [];

  constructor(private navMenuService: NavMenuService) {}

  ngOnInit(): void {
    this.navMenuService.getNavItems().subscribe(items => {
      this.navItems = items;
    });
  }

  toggleMenu(label: string) {
    this.openMenus.update(set => {
      const next = new Set(set);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  }

  isOpen(label: string) { return this.openMenus().has(label); }
}
