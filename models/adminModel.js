import mongoose from 'mongoose';
import { User } from './users/userModel.js';

/**
 * Schema for Admin.
 * @typedef {Object} AdminSchema
 * @property {Array} managedUsers - List of user ID's managed by the admin.
 */
const adminSchema = new mongoose.Schema({
  managedUsers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
});

export const Admin = User.discriminator('Admin', adminSchema);
