import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Form from "./component/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Events from "./pages/Events";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="form" element={<Form />} />
        <Route path="events" element={<Events />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
