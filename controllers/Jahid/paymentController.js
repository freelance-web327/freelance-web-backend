import { Payment } from '../../models/Jahid/paymentModel.js';

/**
 * Payment controller.
 * @module controllers/Jahid/paymentController
 */
export const paymentController = {
  /**
   * Create a new payment.
   * @function
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   */
  createPayment: async (req, res) => {
    try {
      const { projectId, clientId, freelancerId, amount, method } = req.body;
      const payment = await Payment.create({ projectId, clientId, freelancerId, amount, method });
      res.status(201).json({ success: true, data: payment });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  /**
   * Get all payments.
   * @function
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   */
  getAllPayments: async (req, res) => {
    try {
      const payments = await Payment.find();
      res.status(200).json({ success: true, data: payments });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  /**
   * Get a payment by ID.
   * @function
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   */
  getPaymentById: async (req, res) => {
    try {
      const { paymentId } = req.params;
      const payment = await Payment.findById(paymentId);
      if (!payment) {
        return res.status(404).json({ success: false, message: 'Payment not found' });
      }
      res.status(200).json({ success: true, data: payment });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }

  },
  
  refundPayment: async (req, res) => {
    try {
      const { paymentId } = req.params;
      const payment = await Payment.findById(paymentId);
      if (!payment) {
        return res.status(404).json({ success: false, message: 'Payment not found' });
      }
      if (payment.status !== 'completed') {
        return res.status(400).json({ success: false, message: 'Only completed payments can be refunded' });
      }
      payment.status = 'refunded';
      await payment.save();
      res.status(200).json({ success: true, message: 'Payment refunded successfully', data: payment });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  }
};
