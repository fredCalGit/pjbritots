import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TopBar } from "../components/TopBar";
import { LandingPage } from "../pages/LandingPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};
