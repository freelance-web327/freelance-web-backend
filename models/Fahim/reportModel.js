import mongoose from 'mongoose';

/**
 * Schema for Report.
 * @typedef {Object} ReportSchema
 * @property {mongoose.Schema.Types.ObjectId} reportedBy - User who reported the content.
 * @property {mongoose.Schema.Types.ObjectId} reportedUser - User who is reported.
 * @property {mongoose.Schema.Types.ObjectId} projectId - ID of the project reported.
 * @property {String} reason - Reason for reporting.
 * @property {String} status - Status of the report (pending, resolved).
 * @property {Date} reportedAt - Date when the report was created.
 */
const reportSchema = new mongoose.Schema({
  reportedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  reportedUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: false,
  },
  reason: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'resolved'],
    default: 'pending',
  },
  reportedAt: {
    type: Date,
    default: Date.now,
  },
});

export const Report = mongoose.model('Report', reportSchema);
