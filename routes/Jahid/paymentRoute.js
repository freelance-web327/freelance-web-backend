import express from 'express';
import { paymentController } from '../../controllers/Jahid/paymentController.js';
import { adminController } from '../../controllers/Fahim/adminPanelController.js';
import { isAdmin } from '../../middlewares/Fahim/adminAuth.js';

const router = express.Router();

/**
 * Payment routes.
 * @module routes/Jahid/paymentRoute
 */

/**
 * Route to create a new payment.
 * @name POST /api/payments
 * @function
 * @memberof module:routes/Jahid/paymentRoute
 * @inner
 * @param {function} paymentController.createPayment - Controller function to handle creating a new payment.
 */
router.post('/', paymentController.createPayment);

/**
 * Route to get all payments.
 * @name GET /api/payments
 * @function
 * @memberof module:routes/Jahid/paymentRoute
 * @inner
 * @param {function} paymentController.getAllPayments - Controller function to handle getting all payments.
 */
router.get('/', paymentController.getAllPayments);

/**
 * Route to get a payment by ID.
 * @name GET /api/payments/:paymentId
 * @function
 * @memberof module:routes/Jahid/paymentRoute
 * @inner
 * @param {function} paymentController.getPaymentById - Controller function to handle getting a payment by ID.
 */
router.get('/:paymentId', paymentController.getPaymentById);

/**
 * Route to approve or reject a payment.
 * @name PUT /api/payments/:paymentId/approval
 * @function
 * @memberof module:routes/Jahid/paymentRoute
 * @inner
 * @param {function} adminController.approveOrRejectPayment - Controller function to handle approving or rejecting a payment.
 */
router.put('/:paymentId/approval', isAdmin, adminController.approveOrRejectPayment);

export default router;
