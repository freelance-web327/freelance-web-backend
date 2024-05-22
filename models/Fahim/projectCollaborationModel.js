import mongoose from 'mongoose';

/**
 * Schema for Chat Message.
 * @typedef {Object} ChatMessageSchema
 * @property {mongoose.Schema.Types.ObjectId} userId - ID of the user sending the message.
 * @property {string} message - Chat message content.
 * @property {Date} createdAt - Date when the message was sent.
 */
const chatMessageSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

/**
 * Schema for Chat.
 * @typedef {Object} ChatSchema
 * @property {Array} messages - List of chat messages.
 * @property {Array} participants - List of user IDs participating in the chat.
 */
const chatSchema = new mongoose.Schema({
  messages: [chatMessageSchema],
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
});

export const Chat = mongoose.model('Chat', chatSchema);
