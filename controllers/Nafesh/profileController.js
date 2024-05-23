import { User } from "../../models/users/userModel.js";
/**
 * Get user profile.
 * @async
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Object} next - Express next middleware function.
 */
export const getUserProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

/**
 * Update user profile.
 * @async
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Object} next - Express next middleware function.
 */
export const updateUserProfile = async (req, res, next) => {
  try {
    const { name, email, role, location, englishLevel, gender, phone, about } =
      req.body;
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.name = name || user.name;
    user.email = email || user.email;
    user.role = role || user.role;
    user.location = location || user.location;
    user.englishLevel = englishLevel || user.englishLevel;
    user.gender = gender || user.gender;
    user.phone = phone || user.phone;
    user.about = about || user.about;

    const updatedUser = await user.save();
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};
