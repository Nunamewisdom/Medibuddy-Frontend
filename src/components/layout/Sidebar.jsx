import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const linkStyle = (path) => ({
    display: "block",
    padding: "10px",
    marginBottom: "5px",
    textDecoration: "none",
    background: location.pathname === path ? "#e2e8f0" : "transparent",
    color: "#111827",
    borderRadius: "6px"
  });

  return (
    <div
      style={{
        width: "220px",
        background: "#f8fafc",
        padding: "20px",
        height: "100vh",
        borderRight: "1px solid #e5e7eb"
      }}
    >
      <Link to="/" style={linkStyle("/")}>Dashboard</Link>
      <Link to="/profiles" style={linkStyle("/profiles")}>Profiles</Link>
      <Link to="/medications" style={linkStyle("/medications")}>Medications</Link>
      <Link to="/appointments" style={linkStyle("/appointments")}>Appointments</Link>
    </div>
  );
}
