import { Project } from '../../models/Emon/projectPostingModel.js';

/**
 * Project Posting Controller.
 */
export const projectPostingController = {
  /**
   * Create a new project.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @returns {Promise<void>}
   */
  createProject: async (req, res) => {
    try {
      const project = new Project(req.body);
      await project.save();
      res.status(201).json({ success: true, data: project });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  /**
   * Get all projects.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @returns {Promise<void>}
   */
  getAllProjects: async (req, res) => {
    try {
      const projects = await Project.find();
      res.status(200).json({ success: true, data: projects });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  /**
   * Get a project by ID.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @returns {Promise<void>}
   */
  getProjectById: async (req, res) => {
    try {
      const project = await Project.findById(req.params.projectId);
      if (!project) {
        return res.status(404).json({ success: false, message: 'Project not found' });
      }
      res.status(200).json({ success: true, data: project });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  /**
   * Update a project by ID.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @returns {Promise<void>}
   */
  updateProject: async (req, res) => {
    try {
      const project = await Project.findByIdAndUpdate(req.params.projectId, req.body, { new: true });
      if (!project) {
        return res.status(404).json({ success: false, message: 'Project not found' });
      }
      res.status(200).json({ success: true, data: project });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  /**
   * Delete a project by ID.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @returns {Promise<void>}
   */
  deleteProject: async (req, res) => {
    try {
      const project = await Project.findByIdAndDelete(req.params.projectId);
      if (!project) {
        return res.status(404).json({ success: false, message: 'Project not found' });
      }
      res.status(200).json({ success: true, message: 'Project deleted successfully' });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  }
};
