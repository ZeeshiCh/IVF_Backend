import express from 'express';
import {
  getInfo,
  getInfoById,
  createInfo,
  updateInfo,
  deleteInfo,
} from '../controllers/contactInfoController.js';
const router = express.Router();

// Get all Info
router.get('/', getInfo);

// Get single contact Info
router.get('/:id', getInfoById);

// Create new contact Info
router.post('/', createInfo);

// Update contact Info
router.put('/:id', updateInfo);

// Delete contact Info
router.delete('/:id', deleteInfo);

export default router;