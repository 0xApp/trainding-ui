import React from "react";
import "./App.css";

import Login from "./components/login/Login";
import SearchPage from "./components/searchpage/search";
import DashBoard from "./components/dashboard/dashboard";
import Navbar from "./components/navbar/navbar";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/dashboard" element={<DashBoard/>} />
      </Routes>
    </Router>
  );
}

export default App;
