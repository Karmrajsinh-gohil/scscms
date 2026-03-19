import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ComplaintService } from '../../services/complaint.service';
import { CreateComplaintRequest } from '../../core/models/complaint.model';

@Component({
  selector: 'app-submit-complaint',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './submit-complaint.component.html',
  styleUrls: ['./submit-complaint.component.css']
})
export class SubmitComplaintComponent {
  complaint: CreateComplaintRequest = {
    category: '',
    department: '',
    title: '',
    description: '',
    location: ''
  };

  isSubmitting = false;

  categories = [
    'Road Damage',
    'Garbage Collection',
    'Water Supply',
    'Electricity Issue',
    'Street Light Problem',
    'Public Cleanliness'
  ];

  departments = [
    'Municipal Corporation',
    'Water Department',
    'Electricity Department',
    'Public Works Department'
  ];

  constructor(private complaintService: ComplaintService, private router: Router) {}

  submitComplaint() {
    this.isSubmitting = true;

    this.complaintService.createComplaint(this.complaint).subscribe({
      next: () => {
        alert('Complaint submitted successfully.');
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error(error);
        alert('Failed to submit complaint. Please try again.');
        this.isSubmitting = false;
      }
    });
  }
}
