import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./client/login/login.component').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./client/register/register.component').then(m => m.RegisterComponent) },
  {
  path: 'dashboard',
  loadComponent: () =>
    import('./client/dashboard/dashboard.component')
    .then(m => m.DashboardComponent)
}
,{
 path: 'submit-complaint',
 loadComponent: () =>
 import('./client/submit-complaint/submit-complaint.component')
 .then(m => m.SubmitComplaintComponent)
}
  // TODO: Add more routes for dashboard, etc.
];
