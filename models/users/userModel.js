import mongoose from "mongoose";

/**
 * @typedef {Object} UserSchema
 * @property {string} name - The name of the user.
 * @property {string} email - The email of the user.
 * @property {string} password - The password of the user.
 * @property {string} role - The role of the user (client, freelancer, admin).
 * @property {Date} createdAt - The date the user was created.
 */
const USER_SCHEMA = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  role: {
    type: String,
    enum: ["client", "freelancer", "admin"],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isBanned: {
    type: Boolean,
    default: false,
  },
});

export const User = mongoose.model("User", USER_SCHEMA);
