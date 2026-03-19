import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Complaint, CreateComplaintRequest } from '../core/models/complaint.model';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
  private readonly baseUrl = 'http://localhost:5000/api/complaints';

  constructor(private readonly http: HttpClient) {}

  createComplaint(payload: CreateComplaintRequest): Observable<Complaint> {
    return this.http.post<Complaint>(this.baseUrl, payload);
  }

  getMyComplaints(): Observable<Complaint[]> {
    return this.http.get<Complaint[]>(`${this.baseUrl}/my`);
  }
}
