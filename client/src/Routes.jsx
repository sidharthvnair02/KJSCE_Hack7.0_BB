import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const BookingPageMumbai = React.lazy(() => import("pages/BookingPageMumbai"));
const BookingPage = React.lazy(() => import("pages/BookingPage"));
const SignUpPage = React.lazy(() => import("pages/SignUpPage"));
const LoginPage = React.lazy(() => import("pages/LoginPage"));
const HomePage = React.lazy(() => import("pages/HomePage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/signuppage" element={<SignUpPage />} />
          <Route path="/bookingpage" element={<BookingPage />} />
          <Route path="/bookingpagemumbai" element={<BookingPageMumbai />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
