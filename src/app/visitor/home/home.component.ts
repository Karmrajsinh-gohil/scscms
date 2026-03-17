import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatToolbarModule, MatGridListModule, MatCardModule, MatIconModule, MatDividerModule, CommonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
siteTitle: string = 'Smart Civic Services & Complaint Management System (SCSCMS)';
  welcomeMessage: string = 'Welcome to the Smart Civic Services platform. You can submit complaints, track their status, and get help easily.';
  features = [
    { title: 'Submit Complaint', description: 'Easily submit complaints to concerned departments.', icon: 'how_to_reg' },
    { title: 'Track Status', description: 'Check the progress and status of your complaints in real-time.', icon: 'track_changes' },
    { title: 'Help & Support', description: 'Access FAQs, guidelines, and support for civic services.', icon: 'help_outline' }
  ];
}
