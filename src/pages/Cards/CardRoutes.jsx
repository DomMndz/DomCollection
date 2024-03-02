import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Card_Percentage from "./Card_Percentage";

function CardRoutes() {
  return (
    <Routes>
      <Route path="/percent" element={<Card_Percentage />}></Route>
    </Routes>
  );
}

export default CardRoutes;
