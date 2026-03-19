import { Router } from 'express';
import { createComplaint, getMyComplaints } from '../controllers/complaintController.js';
import { protect } from '../middlewares/auth.js';

const router = Router();

router.use(protect);
router.post('/', createComplaint);
router.get('/my', getMyComplaints);

export default router;
