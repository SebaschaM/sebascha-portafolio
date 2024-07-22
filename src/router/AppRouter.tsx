import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ToastProvider from "../provider/ToastProvider";
import { Home } from "../pages";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <ToastProvider />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* QUIERO HACER UN REDIRECT */}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
