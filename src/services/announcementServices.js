// src/services/announcementService.js
import Announcement from '../models/Announcement.js';
import { generateMessage } from '../utils/generateMessage.js';

export const createAnnouncement = async ({ announcer, content, date, department }) => {
    const DATE_REGEX = /^\d{2}\/\d{2}\/\d{4}$/
    try {
        if (!announcer || !content || !date || !department) {
            return generateMessage(400, "All fields are required");
        }
        if (!DATE_REGEX.test(date)) {
            return generateMessage(400, "Invalid date format. Use YYYY-MM-DD.");
        }
        const announcement = new Announcement({ announcer, content, date, department });
        const result = await announcement.save();
        return generateMessage(201, "Announcement created successfully", result);
    } catch (error) {
        return generateMessage(500, error.message);
    }
};

export const getAnnouncement = async (id) => {
    try {
        const result = await Announcement.findById(id);
        return result
            ? generateMessage(200, "Announcement found", result)
            : generateMessage(404, "Announcement not found");
    } catch (error) {
        return generateMessage(500, error.message);
    }
};

export const getAllAnnouncements = async () => {
    try {
        const result = await Announcement.find();
        return generateMessage(200, "Announcements retrieved", result);
    } catch (error) {
        return generateMessage(500, error.message);
    }
};

export const updateAnnouncement = async (id, { announcer, content, date, department }) => {
    const DATE_REGEX = /^\d{2}\/\d{2}\/\d{4}$/
    try {
        if (!announcer || !content || !date || !department) {
            return generateMessage(400, "All fields are required");
        }
        if (!DATE_REGEX.test(date)) {
            return generateMessage(400, "Invalid date format. Use YYYY-MM-DD.");
        }
        const updateData = { announcer, content, date, department };
        const result = await Announcement.findByIdAndUpdate(id, updateData, { new: true });
        return result
            ? generateMessage(200, "Announcement updated successfully", result)
            : generateMessage(404, "Announcement not found");
    } catch (error) {
        return generateMessage(500, error.message);
    }
};

export const deleteAnnouncement = async (id) => {
    try {
        const result = await Announcement.findByIdAndDelete(id);
        return result
            ? generateMessage(201, "Announcement deleted successfully")
            : generateMessage(404, "Announcement not found");
    } catch (error) {
        return generateMessage(500, error.message);
    }
};
