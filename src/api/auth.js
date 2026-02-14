import api from "./index";

export const requestOtp = (phone) =>
  api.post("/auth/otp", { phone });

export const verifyOtp = (requestId, otp) =>
  api.post("/auth/verify", { requestId, otp });
