import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./visitor/home/home.component').then((m) => m.HomeComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./client/login/login.component').then((m) => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./client/register/register.component').then((m) => m.RegisterComponent)
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadComponent: () => import('./client/dashboard/dashboard.component').then((m) => m.DashboardComponent)
  },
  {
    path: 'submit-complaint',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./client/submit-complaint/submit-complaint.component').then((m) => m.SubmitComplaintComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
