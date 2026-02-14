import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div
      style={{
        backgroundColor: "#1e293b",
        color: "white",
        padding: "15px 25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <h2>MediBuddy</h2>

      <div>
        {!isLoggedIn ? (
          <Link
            to="/login"
            style={{
              backgroundColor: "#3b82f6",
              color: "white",
              padding: "8px 14px",
              borderRadius: "6px",
              textDecoration: "none"
            }}
          >
            Login
          </Link>
        ) : (
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: "#ef4444",
              color: "white",
              padding: "8px 14px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer"
            }}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}
