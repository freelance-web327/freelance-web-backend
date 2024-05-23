import jwt from "jsonwebtoken";
import { User } from "../models/users/userModel.js";

/**
 * Middleware to check if the user is authenticated.
 * @async
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Object} next - Express next middleware function.
 */
export const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);

    next();
  } catch (error) {
    res.status(401).json({ message: "Not authenticated" });
  }
};
