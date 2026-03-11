import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-submit-complaint',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './submit-complaint.component.html',
  styleUrls: ['./submit-complaint.component.css']
})
export class SubmitComplaintComponent {

  complaint = {
    category: '',
    department: '',
    title: '',
    description: '',
    location: '',
    image: null
  };

  categories = [
    "Road Damage",
    "Garbage Collection",
    "Water Supply",
    "Electricity Issue",
    "Street Light Problem",
    "Public Cleanliness"
  ];

  departments = [
    "Municipal Corporation",
    "Water Department",
    "Electricity Department",
    "Public Works Department"
  ];

  onFileSelected(event: any) {
    this.complaint.image = event.target.files[0];
  }

  submitComplaint() {
    console.log("Complaint Submitted:", this.complaint);
    alert("Complaint Submitted Successfully!");
  }

}