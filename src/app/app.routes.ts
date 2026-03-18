import { Routes } from '@angular/router';
import { LoginComponent } from './client/login/login.component';
import { DashboardComponent } from './client/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { HomeComponent } from './visitor/home/home.component';
import { RegisterComponent } from './client/register/register.component';

export const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path:'home',component:HomeComponent },
  { path:'register',component:RegisterComponent },
  { path: 'login', component: LoginComponent },

  // USER DASHBOARD
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: { role: 'user' },
  },

  // ADMIN DASHBOARD
  {
    path: 'admin-dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' }
  },

  { path: '**', redirectTo: 'login' }

];