import { useState } from "react";
import api from "../../api/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    try {
      const res = await api.post("/auth/otp", { phone });

      navigate("/verify", {
        state: { requestId: res.data.data.requestId }
      });

    } catch (err) {
      alert("Failed to send OTP");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone number"
      />
      <button onClick={handleSendOtp}>Send OTP</button>
    </div>
  );
}
