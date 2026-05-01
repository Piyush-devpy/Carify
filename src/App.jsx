import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import Explore from "./components/Explore";
import TrackOrder from "./components/TrackOrder";
import About from "./components/About";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <Explore />
      <About/>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar /> 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/track" element={<TrackOrder />} />
      </Routes>
    </Router>
  );
};

export default App;