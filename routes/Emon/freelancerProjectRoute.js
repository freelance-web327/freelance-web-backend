import express from 'express';
import { freelancerProjectController } from '../../controllers/Emon/freelancerProjectController.js';
import { isAuthenticated } from '../../middlewares/auth.js';

const router = express.Router();

/**
 * Route to create a new project proposal.
 * @name POST /api/proposals
 * @function
 * @memberof module:routes/Emon/freelancerProjectRoute
 * @inner
 * @param {function} isAuthenticated - Middleware to check if the user is authenticated.
 * @param {function} freelancerProjectController.createProposal - Controller function to handle creating a project proposal.
 */
router.post('/', isAuthenticated, freelancerProjectController.createProposal);

/**
 * Route to get all proposals for a project.
 * @name GET /api/proposals/project/:projectId
 * @function
 * @memberof module:routes/Emon/freelancerProjectRoute
 * @inner
 * @param {function} isAuthenticated - Middleware to check if the user is authenticated.
 * @param {function} freelancerProjectController.getProposalsForProject - Controller function to handle getting all proposals for a project.
 */
router.get('/project/:projectId', isAuthenticated, freelancerProjectController.getProposalsForProject);

/**
 * Route to get all proposals by a freelancer.
 * @name GET /api/proposals/freelancer/:freelancerId
 * @function
 * @memberof module:routes/Emon/freelancerProjectRoute
 * @inner
 * @param {function} isAuthenticated - Middleware to check if the user is authenticated.
 * @param {function} freelancerProjectController.getProposalsByFreelancer - Controller function to handle getting all proposals by a freelancer.
 */
router.get('/freelancer/:freelancerId', isAuthenticated, freelancerProjectController.getProposalsByFreelancer);

/**
 * Route to update the status of a proposal.
 * @name PUT /api/proposals/:proposalId/status
 * @function
 * @memberof module:routes/Emon/freelancerProjectRoute
 * @inner
 * @param {function} isAuthenticated - Middleware to check if the user is authenticated.
 * @param {function} freelancerProjectController.updateProposalStatus - Controller function to handle updating the status of a proposal.
 */
router.put('/:proposalId/status', isAuthenticated, freelancerProjectController.updateProposalStatus);

/**
 * Route to delete a proposal.
 * @name DELETE /api/proposals/:proposalId
 * @function
 * @memberof module:routes/Emon/freelancerProjectRoute
 * @inner
 * @param {function} isAuthenticated - Middleware to check if the user is authenticated.
 * @param {function} freelancerProjectController.deleteProposal - Controller function to handle deleting a proposal.
 */
router.delete('/:proposalId', isAuthenticated, freelancerProjectController.deleteProposal);

export default router;
