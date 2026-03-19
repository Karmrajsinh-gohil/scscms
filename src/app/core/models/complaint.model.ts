export interface Complaint {
  _id: string;
  userId: string;
  category: string;
  department: string;
  title: string;
  description: string;
  location: string;
  status: 'Submitted' | 'Under Review' | 'Assigned' | 'In Progress' | 'Resolved' | 'Rejected';
  createdAt: string;
  updatedAt: string;
}

export interface CreateComplaintRequest {
  category: string;
  department: string;
  title: string;
  description: string;
  location?: string;
}
