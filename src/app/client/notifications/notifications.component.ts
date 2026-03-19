import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {
  notifications = [
    { message: 'Your complaint C-002 has been resolved.', date: '2026-03-09' },
    { message: 'Complaint C-003 has been assigned to the Roads Department.', date: '2026-03-08' },];

}
