import { Chat } from '../../models/Fahim/projectCollaborationModel.js';

/**
 * Collaboration controller.
 */
export const collaborationController = {
  /**
   * Create a new chat.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   */
  async createChat(req, res) {
    try {
      const { participants } = req.body;
      const chat = new Chat({ participants });
      await chat.save();
      res.status(201).json({ success: true, data: chat });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  /**
   * Add a message to an existing chat.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   */
  async addMessage(req, res) {
    try {
      const { chatId } = req.params;
      const { userId, message } = req.body;
      const chat = await Chat.findById(chatId);

      if (!chat) {
        return res.status(404).json({ success: false, message: 'Chat not found' });
      }

      chat.messages.push({ userId, message });
      await chat.save();
      res.status(200).json({ success: true, data: chat });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  /**
   * Get all chats for a user.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   */
  async getUserChats(req, res) {
    try {
      const { userId } = req.params;
      const chats = await Chat.find({ participants: userId }).populate('participants', 'name');
      res.status(200).json({ success: true, data: chats });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  /**
   * Get a specific chat by ID.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   */
  async getChatById(req, res) {
    try {
      const { chatId } = req.params;
      const chat = await Chat.findById(chatId).populate('participants', 'name');

      if (!chat) {
        return res.status(404).json({ success: false, message: 'Chat not found' });
      }

      res.status(200).json({ success: true, data: chat });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },


};
