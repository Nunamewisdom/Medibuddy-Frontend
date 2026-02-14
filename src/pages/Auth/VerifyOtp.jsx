import { useState } from "react";
import api from "../../api/api";
import { useLocation, useNavigate } from "react-router-dom";

export default function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleVerify = async () => {
    try {
      const res = await api.post("/auth/verify", {
        requestId: location.state?.requestId,
        otp: otp
      });

      console.log("VERIFY RESPONSE:", res.data); // 👈 Debug

      // 👇 IMPORTANT: Save token correctly
      const accessToken = res.data.data.accessToken;

      localStorage.setItem("accessToken", accessToken);

      alert("Login successful!");
      navigate("/");

    } catch (err) {
      console.error(err);
      alert("Invalid OTP");
    }
  };

  return (
    <div>
      <h1>Verify OTP</h1>

      <input
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
      />

      <button onClick={handleVerify}>Verify</button>
    </div>
  );
}
