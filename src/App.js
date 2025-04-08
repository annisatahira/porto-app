import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/Home";
import ContactPage from "./pages/Contact";
import Navbar from "./components/NavBar";
import CallToActionFooter from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <CallToActionFooter />
      </div>
    </Router>
  );
};

export default App;
