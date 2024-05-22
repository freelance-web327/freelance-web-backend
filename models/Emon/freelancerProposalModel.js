import mongoose from 'mongoose';

/**
 * Schema for Freelancer Proposal.
 * @typedef {Object} ProposalSchema
 * @property {mongoose.Schema.Types.ObjectId} freelancerId - ID of the freelancer submitting the proposal.
 * @property {mongoose.Schema.Types.ObjectId} projectId - ID of the project for which the proposal is submitted.
 * @property {string} message - Proposal message.
 * @property {Date} submittedAt - Date when the proposal was submitted.
 */
const proposalSchema = new mongoose.Schema({
  freelancerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

export const Proposal = mongoose.model('Proposal', proposalSchema);
