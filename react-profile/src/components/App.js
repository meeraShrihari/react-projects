import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import KeyFeature from "./pages/KeyFeature";
import Pricing from "./pages/Pricing";
import Testimonials from "./pages/Testimonials";
import Demo from "./pages/Demo";
import NavBar from "./navbar/NavBar";

import './App.css';

function App() {
  return (
    <div className="container">
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" exact element={ <Home /> } />
          <Route path="/features" exact element={ <KeyFeature /> } />
          <Route path="/pricing" exact element={ <Pricing /> } />
          <Route path="/testimonials" exact element={ <Testimonials /> } />
          <Route path="/demo" exact element={ <Demo /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
