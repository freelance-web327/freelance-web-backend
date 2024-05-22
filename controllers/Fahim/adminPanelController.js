import { User } from '../../models/users/userModel.js';
import { Project } from '../../models/Emon/projectPostingModel.js';
import { Report } from '../../models/Fahim/reportModel.js';
import { Log } from '../../models/Fahim/actionsModel.js';
import { Payment } from '../../models/Jahid/paymentModel.js';

/**
 * Controller for admin-panel.
 * @namespace AdminController
 */
export const adminController = {
  /**
   * Get all users.
   * @function getAllUsers
   * @memberof AdminController
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @returns {Promise<void>} - Response indicating success or failure.
   */
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.status(200).json({ success: true, data: users });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  /**
   * Ban a user.
   * @function banUser
   * @memberof AdminController
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @returns {Promise<void>} - Response indicating success or failure.
   */
  async banUser(req, res) {
    try {
      const { userId } = req.params;
      await User.findByIdAndUpdate(userId, { isBanned: true });
      res.status(200).json({ success: true, message: 'User banned successfully' });
      await Log.create({ action: `Banned user ${userId}`, adminId: req.admin._id });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  /**
   * Get all projects.
   * @function getAllProjects
   * @memberof AdminController
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @returns {Promise<void>} - Response indicating success or failure.
   */
  async getAllProjects(req, res) {
    try {
      const projects = await Project.find();
      res.status(200).json({ success: true, data: projects });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  /**
   * Handle reports.
   * @function handleReport
   * @memberof AdminController
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @returns {Promise<void>} - Response indicating success or failure.
   */
  async handleReport(req, res) {
    try {
      const { reportId } = req.params;
      const { status } = req.body;
      await Report.findByIdAndUpdate(reportId, { status });
      res.status(200).json({ success: true, message: 'Report status updated' });
      await Log.create({ action: `Updated report ${reportId} to ${status}`, adminId: req.admin._id });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  /**
   * Get all logs.
   * @function getAllLogs
   * @memberof AdminController
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @returns {Promise<void>} - Response indicating success or failure.
   */
  async getAllLogs(req, res) {
    try {
      const logs = await Log.find().populate('adminId', 'name');
      res.status(200).json({ success: true, data: logs });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },
  /**
   * Approve or reject a payment.
   * @function
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   */
  async approveOrRejectPayment(req, res) {
    try {
      const { paymentId } = req.params;
      const { status } = req.body; // status should be either 'success' or 'rejected'
      if (!['success', 'rejected'].includes(status)) {
        return res.status(400).json({ success: false, message: 'Invalid status' });
      }
      const payment = await Payment.findById(paymentId);
      if (!payment) {
        return res.status(404).json({ success: false, message: 'Payment not found' });
      }
      payment.status = status;
      await payment.save();
      res.status(200).json({ success: true, message: `Payment ${status} successfully`, data: payment });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  }

};
