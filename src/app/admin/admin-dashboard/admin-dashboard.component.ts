import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  stats = {
    totalComplaints: 120,
    pending: 30,
    inProgress: 50,
    resolved: 35,
    rejected: 5,
  };

}
