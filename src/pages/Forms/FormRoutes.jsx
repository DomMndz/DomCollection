import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Textfield_Forms from "./Textfield_Forms";

function FormRoutes() {
  return (
    <Routes>
      <Route path="/textfield" element={<Textfield_Forms />}></Route>
    </Routes>
  );
}

export default FormRoutes;
