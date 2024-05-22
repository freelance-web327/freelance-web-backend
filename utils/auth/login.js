import jwt from "jsonwebtoken";

/**
 * Sets a cookie with a JWT token and sends a JSON response.
 * @param {Object} user - The user object.
 * @param {Object} res - The response object.
 * @param {string} message - The message to send in the response.
 * @param {number} [statusCode=200] - The HTTP status code to send.
 */
export const setCookies = (user, res, message, statusCode = 200) => {
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  res
    .status(statusCode)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 900000,
      sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
      secure: process.env.NODE_ENV !== "Development",
    })
    .json({
      success: true,
      message,
    });
};
