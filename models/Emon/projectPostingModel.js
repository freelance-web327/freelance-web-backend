import mongoose from "mongoose";

/**
 * Schema for Project Posting.
 * @typedef {Object} ProjectSchema
 * @property {string} title - The title of the project.
 * @property {string} description - Detailed description of the project.
 * @property {Number} budget - Budget for the project.
 * @property {Date} deadline - Deadline for the project.
 * @property {mongoose.Schema.Types.ObjectId} clientId - ID of the client posting the project.
 * @property {Array} attachments - Array of attachments (mood boards, reference files, etc.).
 * @property {Date} createdAt - Date when the project was created.
 */
const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  attachments: [
    {
      type: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Project = mongoose.model("Project", projectSchema);
