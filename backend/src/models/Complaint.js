import mongoose from 'mongoose';

const complaintSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, index: true },
    category: { type: String, required: true, trim: true },
    department: { type: String, required: true, trim: true },
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    location: { type: String, default: '', trim: true },
    status: {
      type: String,
      enum: ['Submitted', 'Under Review', 'Assigned', 'In Progress', 'Resolved', 'Rejected'],
      default: 'Submitted'
    }
  },
  { timestamps: true }
);

export const Complaint = mongoose.model('Complaint', complaintSchema);
