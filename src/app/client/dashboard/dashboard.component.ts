import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { ComplaintService } from '../../services/complaint.service';
import { Complaint } from '../../core/models/complaint.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userName = 'Citizen';
  complaints: Complaint[] = [];
  isLoading = true;

  stats = { totalComplaints: 0, pending: 0, resolved: 0, rejected: 0 };

  displayedColumns = ['id', 'category', 'status', 'date'];

  constructor(private complaintService: ComplaintService) {}

  ngOnInit(): void {
    this.loadMyComplaints();
  }

  loadMyComplaints(): void {
    this.complaintService.getMyComplaints().subscribe({
      next: (complaints) => {
        this.complaints = complaints;
        this.computeStats();
        this.isLoading = false;
      },
      error: (error) => {
        console.error(error);
        this.isLoading = false;
      }
    });
  }

  private computeStats(): void {
    this.stats.totalComplaints = this.complaints.length;
    this.stats.pending = this.complaints.filter((c) =>
      ['Submitted', 'Under Review', 'Assigned', 'In Progress'].includes(c.status)
    ).length;
    this.stats.resolved = this.complaints.filter((c) => c.status === 'Resolved').length;
    this.stats.rejected = this.complaints.filter((c) => c.status === 'Rejected').length;
  }
}
