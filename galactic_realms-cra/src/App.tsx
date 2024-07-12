import React from "react";
import "./App.css";

import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";
import { Inspiration } from "./pages/Inspiration";
import { Footer } from "./components/Footer";

import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#1B1B1D" }}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" key={"home"} element={<Home />} />
          <Route
            path="/inspiration"
            key={"inspiration"}
            element={<Inspiration />}
          />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
