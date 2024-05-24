import express from "express";
import {
  getUserProfile,
  updateUserProfile,
} from "../../controllers/Nafesh/profileController.js";
import { isAuthenticated } from "../../middlewares/authMiddleware.js";

const router = express.Router();

/**
 * @route GET /api/profile
 * @desc Get user profile
 * @access Private
 */
router.get("/", isAuthenticated, getUserProfile);

/**
 * @route PUT /api/profile
 * @desc Update user profile
 * @access Private
 */
router.put("/", isAuthenticated, updateUserProfile);

export default router;
