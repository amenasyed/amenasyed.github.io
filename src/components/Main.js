import React, { Component } from 'react';
import "./Main.css";
import Card from "./Card";
import {Grid} from "@mui/material";
import deciSense from "../images/deciSense.png";
import moodFM from "../images/moodFM.png";
import resume from "../images/amena-resume-2022.pdf";

function Main() {
    return (
        <div className="main-container">
            <div className="main-text">
                <div className="landing-page">
                    <h1>Hello! I'm Amena 🌼; a biomedical engineering student ⛅ studying at the University of Waterloo 🤍</h1>
                    <h3>Currently developing<a href="https://global.medical.canon/" className="underline">@Canon</a>. Previously<a href="https://www.centrefordigitaltherapeutics.ca/" className="underline">@University Health Network</a>. Seeking <span className="underline">Summer 2023 SWE internship opportunities.</span></h3>
            
                 <div className="main-btns">
                        <a href="#/work">
                            <button href="#/work" className="btn-blue">work</button>
                        </a>

                        <a href={resume}>
                            <button className="btn-blue">resume</button>
                        </a>
                    </div>
                </div>

                <div className="projects-display">
                    <h1>Life Lately</h1>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <Card title="mood FM" date="Hack The North | September 2022" tag="Software" body="mood FM provides you with your own personal mixtape (a personalized 'radio channel,' if you will), to play background music suited to the nuanced mood of your conversation." linkName="Devpost" linkURL="https://devpost.com/software/mood-fm" imgURL={moodFM} ></Card>
                            </Grid>

                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <Card title="deciSense" date="Design Project | July 2022" tag="Hardware" body="deciSense is a device aimed to detect harmful environmental noise and alerts the user to prevent temporary and permanent hearing damage." linkName="GitHub" linkURL="https://github.com/amenasyed/deciSense" imgURL={deciSense} ></Card>
                            </Grid>

                        </Grid>
                </div>
            </div>

        </div>
        
    );
}

export default Main;