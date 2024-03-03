import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import PushableButton from "./PushableButton";

function ButtonRoutes() {
  return (
    <Routes>
      <Route path="/pushable" element={<PushableButton />}></Route>
    </Routes>
  );
}

export default ButtonRoutes;
