import React from "react";
import Main from './components/Main';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {Route, Link} from "react-router-dom";
import "./Home.css";

function Home() {
    return (
        <div className="Home">
            <Navbar></Navbar>
            <Main></Main>
            <Footer></Footer>
        </div>
    );
}

export default Home;