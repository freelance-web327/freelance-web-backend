import mongoose from 'mongoose';

/**
 * Schema for Payment Method.
 * @typedef {Object} PaymentMethodSchema
 * @property {mongoose.Schema.Types.ObjectId} userId - ID of the user associated with the payment method.
 * @property {string} methodType - Type of payment method (PayPal, Bank).
 * @property {string} accountNumber - Account number or identifier for the payment method.
 */
const paymentMethodSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  methodType: {
    type: String,
    required: true,
  },
  accountNumber: {
    type: String,
    required: true,
  },
});

export const PaymentMethod = mongoose.model('PaymentMethod', paymentMethodSchema);
