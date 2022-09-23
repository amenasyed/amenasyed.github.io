import './App.css';
import React from "react"
import Home from "./Home";
import Work from "./Work";
import About from "./About";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/work" element={<Work />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      
    </div>
  );
}

export default App;
