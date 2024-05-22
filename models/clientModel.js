import mongoose from "mongoose";
import { User } from './users/userModel.js';

/**
 * Schema for Client.
 * @typedef {Object} ClientSchema
 * @property {Array} shortlistedFreelancers - List of freelancer IDs shortlisted by the client.
 */
const CLIENT_SCHEMA = new mongoose.Schema({
  shortlistedFreelancers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

export const Client = User.discriminator("Client", CLIENT_SCHEMA);
