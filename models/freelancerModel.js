import mongoose from "mongoose";
import { User } from './users/userModel.js';

/**
 * Schema for Freelancer.
 * @typedef {Object} FreelancerSchema
 * @property {Number} rate - Preferred project rate of the freelancer.
 * @property {Number} minimumBudget - Minimum budget requirement.
 * @property {Array} portfolio - List of past work samples.
 * @property {Object} availabilityCalendar - Calendar indicating availability.
 */
const FREELANCER_SCHEMA = new mongoose.Schema({
  rate: {
    type: Number,
    required: true,
  },
  minimumBudget: {
    type: Number,
    required: true,
  },
  portfolio: [
    {
      type: String,
    },
  ],
  availabilityCalendar: {
    type: Map,
    of: String,
  },
});

export const Freelancer = User.discriminator("Freelancer", FREELANCER_SCHEMA);
