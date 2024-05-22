import express from 'express';
import { collaborationController } from '../../controllers/Fahim/collaborationController.js';
import { isAuthenticated } from '../../middlewares/auth.js';

const router = express.Router();

/**
 * Route to create a new chat.
 * @name POST /api/projects/chat
 * @function
 * @memberof module:routes/Fahim/collaborationRoute
 * @inner
 * @param {function} isAuthenticated - Middleware to check if the user is authenticated.
 * @param {function} collaborationController.createChat - Controller function to handle chat creation.
 */
router.post('/chat', isAuthenticated, collaborationController.createChat);

/**
 * Route to add a message to an existing chat.
 * @name POST /api/projects/chat/:chatId/message
 * @function
 * @memberof module:routes/Fahim/collaborationRoute
 * @inner
 * @param {function} isAuthenticated - Middleware to check if the user is authenticated.
 * @param {function} collaborationController.addMessage - Controller function to handle adding a message.
 */
router.post('/chat/:chatId/message', isAuthenticated, collaborationController.addMessage);

/**
 * Route to get all chats for a user.
 * @name GET /api/projects/chats/:userId
 * @function
 * @memberof module:routes/Fahim/collaborationRoute
 * @inner
 * @param {function} isAuthenticated - Middleware to check if the user is authenticated.
 * @param {function} collaborationController.getUserChats - Controller function to handle getting all user chats.
 */
router.get('/chats/:userId', isAuthenticated, collaborationController.getUserChats);

/**
 * Route to get a specific chat by ID.
 * @name GET /api/projects/chat/:chatId
 * @function
 * @memberof module:routes/Fahim/collaborationRoute
 * @inner
 * @param {function} isAuthenticated - Middleware to check if the user is authenticated.
 * @param {function} collaborationController.getChatById - Controller function to handle getting a chat by ID.
 */
router.get('/chat/:chatId', isAuthenticated, collaborationController.getChatById);

/**
 * Route to delete a chat by ID.
 * @name DELETE /api/projects/chat/:chatId
 * @function
 * @memberof module:routes/Fahim/collaborationRoute
 * @inner
 * @param {function} isAuthenticated - Middleware to check if the user is authenticated.
 * @param {function} collaborationController.deleteChat - Controller function to handle deleting a chat.
 */
router.delete('/chat/:chatId', isAuthenticated, collaborationController.deleteChat);

export default router;
