// src/controllers/announcementController.js
import * as announcementService from '../services/announcementServices.js';

export const createAnnouncement = async (req, res) => {
    const result = await announcementService.createAnnouncement(req.body);
    res.status(result.statusCode).json(result);
};

export const getAnnouncement = async (req, res) => {
    const result = await announcementService.getAnnouncement(req.params.id);
    res.status(result.statusCode).json(result);
};

export const getAllAnnouncements = async (req, res) => {
    const result = await announcementService.getAllAnnouncements();
    res.status(result.statusCode).json(result);
};

export const updateAnnouncement = async (req, res) => {
    const result = await announcementService.updateAnnouncement(req.params.id, req.body);
    res.status(result.statusCode).json(result);
};

export const deleteAnnouncement = async (req, res) => {
    const result = await announcementService.deleteAnnouncement(req.params.id);
    res.status(result.statusCode).json(result);
};
