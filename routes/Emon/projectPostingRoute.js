import express from 'express';
import { projectPostingController } from '../../controllers/Emon/projectPostingController.js';
import { isAuthenticated } from '../../middlewares/auth.js';

const router = express.Router();

/**
 * Route to create a new project.
 * @name POST /api/projects
 * @function
 * @memberof module:routes/Emon/projectPostingRoute
 * @inner
 * @param {function} isAuthenticated - Middleware to check if the user is authenticated.
 * @param {function} projectPostingController.createProject - Controller function to handle project creation.
 */
router.post('/', isAuthenticated, projectPostingController.createProject);

/**
 * Route to get all projects.
 * @name GET /api/projects
 * @function
 * @memberof module:routes/Emon/projectPostingRoute
 * @inner
 * @param {function} isAuthenticated - Middleware to check if the user is authenticated.
 * @param {function} projectPostingController.getAllProjects - Controller function to handle getting all projects.
 */
router.get('/', isAuthenticated, projectPostingController.getAllProjects);

/**
 * Route to get a specific project by ID.
 * @name GET /api/projects/:projectId
 * @function
 * @memberof module:routes/Emon/projectPostingRoute
 * @inner
 * @param {function} isAuthenticated - Middleware to check if the user is authenticated.
 * @param {function} projectPostingController.getProjectById - Controller function to handle getting a project by ID.
 */
router.get('/:projectId', isAuthenticated, projectPostingController.getProjectById);

/**
 * Route to update a project by ID.
 * @name PUT /api/projects/:projectId
 * @function
 * @memberof module:routes/Emon/projectPostingRoute
 * @inner
 * @param {function} isAuthenticated - Middleware to check if the user is authenticated.
 * @param {function} projectPostingController.updateProject - Controller function to handle updating a project.
 */
router.put('/:projectId', isAuthenticated, projectPostingController.updateProject);

/**
 * Route to delete a project by ID.
 * @name DELETE /api/projects/:projectId
 * @function
 * @memberof module:routes/Emon/projectPostingRoute
 * @inner
 * @param {function} isAuthenticated - Middleware to check if the user is authenticated.
 * @param {function} projectPostingController.deleteProject - Controller function to handle deleting a project.
 */
router.delete('/:projectId', isAuthenticated, projectPostingController.deleteProject);

export default router;
