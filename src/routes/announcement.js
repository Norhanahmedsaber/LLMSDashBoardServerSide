// routes/announcementRoutes.js
import express from 'express';
import { createAnnouncement, getAnnouncement, getAllAnnouncements, updateAnnouncement, deleteAnnouncement }  from '../controller/annoncementController.js';
const router = express.Router();

router.post('/', createAnnouncement);
router.get('/:id', getAnnouncement);
router.get('/', getAllAnnouncements);
router.put('/:id', updateAnnouncement);
router.delete('/:id', deleteAnnouncement);

export default router;
