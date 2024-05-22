import { Proposal } from '../../models/Emon/freelancerProposalModel.js';

/**
 * Freelancer Project Proposal Controller.
 */
export const freelancerProjectController = {
  /**
   * Create a new project proposal.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @returns {Promise<void>}
   */
  createProposal: async (req, res) => {
    try {
      const proposal = new FreelancerProject(req.body);
      await proposal.save();
      res.status(201).json({ success: true, data: proposal });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  /**
   * Get all proposals for a project.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @returns {Promise<void>}
   */
  getProposalsForProject: async (req, res) => {
    try {
      const proposals = await FreelancerProject.find({ projectId: req.params.projectId });
      res.status(200).json({ success: true, data: proposals });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  /**
   * Get all proposals by a freelancer.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @returns {Promise<void>}
   */
  getProposalsByFreelancer: async (req, res) => {
    try {
      const proposals = await FreelancerProject.find({ freelancerId: req.params.freelancerId });
      res.status(200).json({ success: true, data: proposals });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  /**
   * Update proposal status.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @returns {Promise<void>}
   */
  updateProposalStatus: async (req, res) => {
    try {
      const { proposalId } = req.params;
      const { status } = req.body;
      const proposal = await FreelancerProject.findByIdAndUpdate(proposalId, { status }, { new: true });
      if (!proposal) {
        return res.status(404).json({ success: false, message: 'Proposal not found' });
      }
      res.status(200).json({ success: true, data: proposal });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  /**
   * Delete a proposal.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @returns {Promise<void>}
   */
  deleteProposal: async (req, res) => {
    try {
      const proposal = await FreelancerProject.findByIdAndDelete(req.params.proposalId);
      if (!proposal) {
        return res.status(404).json({ success: false, message: 'Proposal not found' });
      }
      res.status(200).json({ success: true, message: 'Proposal deleted successfully' });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },
};
