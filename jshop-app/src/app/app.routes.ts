import { Routes } from '@angular/router';
import { authGuard, loginGuard } from './core/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    canActivate: [loginGuard],
    loadComponent: () => import('./features/login/login').then(m => m.Login),
  },
  {
    path: '',
    loadComponent: () => import('./layout/shell/shell').then(m => m.Shell),
    canActivate: [authGuard],
    children: [
      { path: 'home', loadComponent: () => import('./features/home/home').then(m => m.Home) },
      { path: 'reports', loadComponent: () => import('./features/reports/reports').then(m => m.Reports) },
      // Operations
      { path: 'operations/receiving', loadComponent: () => import('./features/operations/receiving/receiving').then(m => m.Receiving) },
      { path: 'operations/shipment', loadComponent: () => import('./features/operations/shipment/shipment').then(m => m.Shipment) },
      { path: 'operations/inventory-adjustment', loadComponent: () => import('./features/operations/inventory-adjustment/inventory-adjustment').then(m => m.InventoryAdjustment) },
      { path: 'operations/yard-management', loadComponent: () => import('./features/operations/yard-management/yard-management').then(m => m.YardManagement) },
      { path: 'operations/task-management', loadComponent: () => import('./features/operations/task-management/task-management').then(m => m.TaskManagement) },
      { path: 'operations/generic-labels', loadComponent: () => import('./features/operations/generic-labels/generic-labels').then(m => m.GenericLabels) },
      { path: 'operations/inventory', loadComponent: () => import('./features/operations/inventory/inventory').then(m => m.Inventory) },
      { path: 'operations/process-order', loadComponent: () => import('./features/operations/process-order/process-order').then(m => m.ProcessOrder) },
      // Administration
      { path: 'administration/facility', loadComponent: () => import('./features/administration/facility/facility').then(m => m.Facility) },
      { path: 'administration/interface', loadComponent: () => import('./features/administration/interface/interface').then(m => m.Interface) },
      { path: 'administration/setup', loadComponent: () => import('./features/administration/setup/setup').then(m => m.Setup) },
      { path: 'administration/master-data', loadComponent: () => import('./features/administration/master-data/master-data').then(m => m.MasterData) },
    ]
  },
  { path: '**', redirectTo: 'login' }
];
