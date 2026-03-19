import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-complaints',
  standalone: true,
  imports: [CommonModule],          // <-- this line is required
  templateUrl: './view-complaints.component.html',
  styleUrls: ['./view-complaints.component.css'],
})
export class ViewComplaintsComponent {
  complaints = [
    { id: 'C-001', category: 'Road Damage', status: 'Pending', date: '2026-03-10' },
    { id: 'C-002', category: 'Water Supply', status: 'Resolved', date: '2026-03-09' },
  ];
}