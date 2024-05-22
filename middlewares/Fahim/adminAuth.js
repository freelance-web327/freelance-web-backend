import jwt from 'jsonwebtoken';
import { Admin } from '../../models/adminModel.js';

/**
 * Middleware to check if the user is an admin.
 */
export const isAdmin = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ success: false, message: 'Admin login required' });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = await Admin.findById(decodedToken.id);
    if (!req.admin) {
      return res.status(401).json({ success: false, message: 'Admin not found' });
    }
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Invalid token' });
  }
};
