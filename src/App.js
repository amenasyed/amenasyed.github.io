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
        <Route path="/" element={<Home></Home>} />
        <Route path="/work" element={<Work></Work>} />
        <Route path="/about" element={<About></About>} />
      </Routes>
      
    </div>
  );
}

export default App;
