import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import MUI_DataGrid from "./MUI_DataGrid";

function TableRoutes() {
  return (
    <Routes>
      <Route path="/mui-datagrid" element={<MUI_DataGrid />}></Route>
    </Routes>
  );
}

export default TableRoutes;
