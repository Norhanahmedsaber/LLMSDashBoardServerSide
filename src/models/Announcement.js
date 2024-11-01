// src/models/Announcement.js
import mongoose from 'mongoose';

const announcementSchema = new mongoose.Schema({
    announcer: { type: String, required: [true, "Announcer is required"] },
    content: { type: String, required: [true, "Content is required"] },
    date: { type: Date, required: [true, "Date is required"] },
    department: { type: String, required: [true, "Department is required"] },
});

export default mongoose.model('Announcement', announcementSchema);
