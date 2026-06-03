import { Component, Input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string;
  icon: string;
  route?: string;
  children?: NavItem[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  @Input() collapsed = false;

  openMenus = signal<Set<string>>(new Set());

  navItems: NavItem[] = [
    {
      label: 'Home',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
      route: '/home',
    },
    {
      label: 'Operations',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
      children: [
        { label: 'Receiving',              icon: '', route: '/operations/receiving' },
        { label: 'Shipment',               icon: '', route: '/operations/shipment' },
        { label: 'Inventory Adjustment',   icon: '', route: '/operations/inventory-adjustment' },
        { label: 'Yard Management',        icon: '', route: '/operations/yard-management' },
        { label: 'Task Management',        icon: '', route: '/operations/task-management' },
        { label: 'Generic Labels',         icon: '', route: '/operations/generic-labels' },
        { label: 'Inventory',              icon: '', route: '/operations/inventory' },
        { label: 'Process Order Maintenance', icon: '', route: '/operations/process-order' },
      ],
    },
    {
      label: 'Administration',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 10-16 0"/><circle cx="12" cy="8" r="4"/></svg>`,
      children: [
        { label: 'Facility',    icon: '', route: '/administration/facility' },
        { label: 'Interface',   icon: '', route: '/administration/interface' },
        { label: 'Setup',       icon: '', route: '/administration/setup' },
        { label: 'Master Data', icon: '', route: '/administration/master-data' },
      ],
    },
    {
      label: 'Reports',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6"  y1="20" x2="6"  y2="14"/></svg>`,
      route: '/reports',
    },
  ];

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
