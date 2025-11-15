import rateLimit from "express-rate-limit";

export const sendOtp = rateLimit({
  windowMs: 3 * 60 * 1000, // 3 minutes
  limit: 1, // Limit each IP to 100 requests per `windowMs`
  standardHeaders: "draft-7", // Set RateLimit headers
  legacyHeaders: false, // Disable X-RateLimit headers
  message: "OTP is already sent, please try again after 3 minutes",
});
