import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ToastProvider from "../provider/ToastProvider";
import { Home, Projects } from "../pages";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <ToastProvider />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
