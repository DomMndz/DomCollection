import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Navigation from "./pages/Navigation";
import Dashboard from "./pages/Dashboard";
import TableRoutes from "./pages/Tables/TableRoutes";
import FormRoutes from "./pages/Forms/FormRoutes";
import CardRoutes from "./pages/Cards/CardRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Dashboard />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/table/*" element={<TableRoutes />} />
          <Route path="/form/*" element={<FormRoutes />} />
          <Route path="/card/*" element={<CardRoutes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
