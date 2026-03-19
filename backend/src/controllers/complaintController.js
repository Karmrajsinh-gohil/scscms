import { Complaint } from '../models/Complaint.js';

export const createComplaint = async (req, res) => {
  const { category, department, title, description, location } = req.body;

  if (!category || !department || !title || !description) {
    return res.status(400).json({ message: 'category, department, title and description are required.' });
  }

  const complaint = await Complaint.create({
    userId: req.user.uid,
    category,
    department,
    title,
    description,
    location: location || ''
  });

  return res.status(201).json(complaint);
};

export const getMyComplaints = async (req, res) => {
  const complaints = await Complaint.find({ userId: req.user.uid }).sort({ createdAt: -1 });
  return res.status(200).json(complaints);
};
