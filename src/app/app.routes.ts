import { Routes } from '@angular/router';

// Visitor
import { HomeComponent } from './visitor/home/home.component';
import { AboutSystemComponent } from './visitor/about-system/about-system.component';
import { ServiceInformationComponent } from './visitor/service-information/service-information.component';
// (add others when you create them: FAQs, ContactUs, Notices, Help, etc.)

// Auth / Client
import { LoginComponent } from './client/login/login.component';
import { RegisterComponent } from './client/register/register.component';
import { DashboardComponent } from './client/dashboard/dashboard.component';
import { SubmitComplaintComponent } from './client/submit-complaint/submit-complaint.component';
import { ProfilemanageComponent } from './client/profilemanage/profilemanage.component';
// placeholders to be created:
import { ViewComplaintsComponent } from './client/view-complaints/view-complaints.component';
import { ComplaintHistoryComponent } from './client/complaint-history/complaint-history.component';
import { NotificationsComponent } from './client/notifications/notifications.component';
import { FeedbackComponent } from './client/feedback/feedback.component';

// Admin (placeholders you will add)
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { ManageComplaintsComponent } from './admin/manage-complaints/manage-complaints.component';
import { ManageDepartmentsComponent } from './admin/manage-departments/manage-departments.component';
import { ReportsComponent } from './admin/reports/reports.component';
import { AdminFeedbackComponent } from './admin/admin-feedback/admin-feedback.component';
import { SystemSettingsComponent } from './admin/system-settings/system-settings.component';

import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

export const routes: Routes = [
  // Default → Visitor home
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Visitor side
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutSystemComponent },
  { path: 'services', component: ServiceInformationComponent },
  // later:
  // { path: 'categories', component: ComplaintCategoriesComponent },
  // { path: 'contact', component: ContactUsComponent },
  // { path: 'faqs', component: FaqsComponent },
  // { path: 'notices', component: PublicNoticesComponent },
  // { path: 'help', component: HelpPageComponent },

  // Auth
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Client side (citizen) – requires login
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: { role: 'user' }, // or 'client'
  },
  {
    path: 'profile',
    component: ProfilemanageComponent,
    canActivate: [AuthGuard],
    data: { role: 'user' },
  },
  {
    path: 'submit-complaint',
    component: SubmitComplaintComponent,
    canActivate: [AuthGuard],
    data: { role: 'user' },
  },
  {
    path: 'view-complaints',
    component: ViewComplaintsComponent,
    canActivate: [AuthGuard],
    data: { role: 'user' },
  },
  {
    path: 'complaint-history',
    component: ComplaintHistoryComponent,
    canActivate: [AuthGuard],
    data: { role: 'user' },
  },
  {
    path: 'notifications',
    component: NotificationsComponent,
    canActivate: [AuthGuard],
    data: { role: 'user' },
  },
  {
    path: 'feedback',
    component: FeedbackComponent,
    canActivate: [AuthGuard],
    data: { role: 'user' },
  },

  // Admin side – requires login + admin role
  { path: 'admin-login', component: AdminLoginComponent },
  {
    path: 'admin/dashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' },
  },
  {
    path: 'admin/users',
    component: ManageUsersComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' },
  },
  {
    path: 'admin/complaints',
    component: ManageComplaintsComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' },
  },
  {
    path: 'admin/departments',
    component: ManageDepartmentsComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' },
  },
  {
    path: 'admin/reports',
    component: ReportsComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' },
  },
  {
    path: 'admin/feedback',
    component: AdminFeedbackComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' },
  },
  {
    path: 'admin/settings',
    component: SystemSettingsComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' },
  },

  // Fallback
  { path: '**', redirectTo: 'home' },
];