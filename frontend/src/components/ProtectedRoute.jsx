import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user")); // make sure you store this on login

  // ❌ No token
  if (!token) {
    return <Navigate to="/user/login" />;
  }

  // ❌ Role mismatch (for admin routes)
  if (role && user?.role !== role) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;