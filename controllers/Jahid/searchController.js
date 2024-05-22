import { Project } from '../../models/Emon/projectPostingModel.js';

/**
 * Search and filter controller.
 * @module controllers/searchController
 */

/**
 * Advanced search and filter for projects.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>}
 */
export const searchController = {
  advancedSearch: async (req, res) => {
    try {
      const { keyword, minBudget, maxBudget, startDate, endDate } = req.query;

      const query = {};

      if (keyword) {
        query.$text = { $search: keyword };
      }

      if (minBudget || maxBudget) {
        query.budget = {};
        if (minBudget) query.budget.$gte = Number(minBudget);
        if (maxBudget) query.budget.$lte = Number(maxBudget);
      }

      if (startDate || endDate) {
        query.startDate = {};
        if (startDate) query.startDate.$gte = new Date(startDate);
        if (endDate) query.startDate.$lte = new Date(endDate);
      }

      const projects = await Project.find(query);
      res.status(200).json({ success: true, data: projects });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },
};
