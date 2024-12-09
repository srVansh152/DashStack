import React from "react";
import { Navigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

const PrivateRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" />;
  }

  try {
    const decodedToken = jwtDecode(token);
    console.log(decodedToken);
    const currentTime = Date.now() / 1000;

    if (decodedToken.exp < currentTime) {
      return <Navigate to="/" />;
    }

    if (!allowedRoles.includes(decodedToken.role)) {
      return <Navigate to="/unauthorized" />;
    }

    return children;
  } catch (error) {
    console.error("Invalid token:", error);
    return <Navigate to="/" />;
  }
};

export default PrivateRoute;