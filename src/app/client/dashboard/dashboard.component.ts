import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Angular Material imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

// Your Navbar and Footer components
//import { NavbarComponent } from '../../components/navbar/navbar.component';
//import { FooterComponent } from '../../components/footer/footer.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    // Material Modules
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    // Your components
    //NavbarComponent,
    //FooterComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  userName = 'Gohil Karmrajsinh';
  stats = { totalComplaints: 10, pending: 3, resolved: 5, rejected: 2 };
  recentComplaints = [
    { id: 1, category: 'Water', status: 'Pending', date: '2026-03-09' },
    { id: 2, category: 'Road', status: 'Resolved', date: '2026-03-08' }
  ];
}