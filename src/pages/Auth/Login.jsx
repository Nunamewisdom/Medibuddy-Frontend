import { useState } from "react";
import api from "../../api/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    setLoading(true);

    try {
      const res = await api.post("/auth/otp", { phone });

      navigate("/verify", {
        state: { requestId: res.data.data.requestId }
      });

    } catch (err) {
      console.error(err);
      alert("Failed to send OTP. Try again.");
    } finally {
      setLoading(false);
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

      <button onClick={handleSendOtp} disabled={loading}>
        {loading ? "Sending..." : "Send OTP"}
      </button>
    </div>
  );
}
