import mongoose from 'mongoose';

/**
 * Schema for Log.
 * @typedef {Object} LogSchema
 * @property {String} action - Description of the action.
 * @property {mongoose.Schema.Types.ObjectId} adminId - ID of the admin who performed the action.
 * @property {Date} timestamp - Date and time when the action was performed.
 */
const logSchema = new mongoose.Schema({
  action: {
    type: String,
    required: true,
  },
  adminId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin',
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

export const Log = mongoose.model('Log', logSchema);
