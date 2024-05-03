import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Cookies from "js-cookie";

//pages
import Navigation from "../pages/Navigation";
import Dashboard from "../pages/Dashboard";
import TableRoutes from "../pages/Tables/TableRoutes";
import FormRoutes from "../pages/Forms/FormRoutes";
import CardRoutes from "../pages/Cards/CardRoutes";
import ButtonRoutes from "../pages/Buttons/ButtonRoutes";

function ProtectedRoute() {
  const token = Cookies.get("token");
  return (
    <Routes>
      <Route
        path="/"
        element={token ? <Navigation /> : <Navigate to="/login" />}
      >
        <Route index element={<Dashboard />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/table/*" element={<TableRoutes />} />
        <Route path="/form/*" element={<FormRoutes />} />
        <Route path="/card/*" element={<CardRoutes />} />
        <Route path="/button/*" element={<ButtonRoutes />} />
      </Route>
    </Routes>
  );
}

export default ProtectedRoute;
