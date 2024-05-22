import mongoose from 'mongoose';

/**
 * Schema for Payment.
 * @typedef {Object} PaymentSchema
 * @property {mongoose.Schema.Types.ObjectId} projectId - ID of the project for which the payment is made.
 * @property {mongoose.Schema.Types.ObjectId} clientId - ID of the client making the payment.
 * @property {mongoose.Schema.Types.ObjectId} freelancerId - ID of the freelancer receiving the payment.
 * @property {mongoose.Schema.Types.ObjectId} paymentMethodId - ID of the payment method used for the transaction.
 * @property {Number} amount - Payment amount.
 * @property {Date} paidAt - Date when the payment was made.
 * @property {string} status - Payment status (pending, completed, refunded, etc.).
 */
const paymentSchema = new mongoose.Schema({
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true,
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  freelancerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  paymentMethodId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PaymentMethod',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  paidAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'refunded'],
    default: 'pending',
  },
});

export const Payment = mongoose.model('Payment', paymentSchema);
