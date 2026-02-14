import { Routes, Route } from "react-router-dom";
import Login from "../pages/Auth/Login";
import VerifyOtp from "../pages/Auth/VerifyOtp";
import Dashboard from "../pages/Dashboard";
import Profiles from "../pages/Profiles";
import Medications from "../pages/Medications";
import Appointments from "../pages/Appointments";
import RequireAuth from "../auth/RequireAuth";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/verify" element={<VerifyOtp />} />

      <Route
        path="/"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />

      <Route
        path="/profiles"
        element={
          <RequireAuth>
            <Profiles />
          </RequireAuth>
        }
      />

      <Route
        path="/medications"
        element={
          <RequireAuth>
            <Medications />
          </RequireAuth>
        }
      />

      <Route
        path="/appointments"
        element={
          <RequireAuth>
            <Appointments />
          </RequireAuth>
        }
      />
    </Routes>
  );
}
