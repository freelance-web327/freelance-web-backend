import express from 'express';
import { adminController } from '../../controllers/Fahim/adminPanelController.js';
import { isAdmin } from '../../middlewares/Fahim/adminAuth.js';

const router = express.Router();

/**
 * Admin panel routes.
 * @module routes/Fahim/adminPanelRoute
 */

/**
 * Route to get all users.
 * @name GET /api/admin/users
 * @function
 * @memberof module:routes/Fahim/adminPanelRoute
 * @inner
 * @param {function} isAdmin - Middleware to check if the user is an admin.
 * @param {function} adminController.getAllUsers - Controller function to handle getting all users.
 */
router.get('/users', isAdmin, adminController.getAllUsers);

/**
 * Route to ban a user.
 * @name PUT /api/admin/users/ban/:userId
 * @function
 * @memberof module:routes/Fahim/adminPanelRoute
 * @inner
 * @param {function} isAdmin - Middleware to check if the user is an admin.
 * @param {function} adminController.banUser - Controller function to handle banning a user.
 */
router.put('/users/ban/:userId', isAdmin, adminController.banUser);

/**
 * Route to get all projects.
 * @name GET /api/admin/projects
 * @function
 * @memberof module:routes/Fahim/adminPanelRoute
 * @inner
 * @param {function} isAdmin - Middleware to check if the user is an admin.
 * @param {function} adminController.getAllProjects - Controller function to handle getting all projects.
 */
router.get('/projects', isAdmin, adminController.getAllProjects);

/**
 * Route to handle a report.
 * @name PUT /api/admin/reports/:reportId
 * @function
 * @memberof module:routes/Fahim/adminPanelRoute
 * @inner
 * @param {function} isAdmin - Middleware to check if the user is an admin.
 * @param {function} adminController.handleReport - Controller function to handle a report.
 */
router.put('/reports/:reportId', isAdmin, adminController.handleReport);

/**
 * Route to get all logs.
 * @name GET /api/admin/logs
 * @function
 * @memberof module:routes/Fahim/adminPanelRoute
 * @inner
 * @param {function} isAdmin - Middleware to check if the user is an admin.
 * @param {function} adminController.getAllLogs - Controller function to handle getting all logs.
 */
router.get('/logs', isAdmin, adminController.getAllLogs);

export default router;