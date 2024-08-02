import React, { Component } from 'react';
import "./Main.css";
import Card from "./Card";
import {Grid} from "@mui/material";
import ai from "../images/ai.png";
import marifa from "../images/marifa.png";
import moodFM from "../images/moodFM.png";
import resume from "../images/amena-resume.pdf";

function Main() {
    return (
        <div className="main-container">
            <div className="main-text">
                <div className="landing-page">
                    <h1>Hello! I'm Amena 🌼; I'm in my final year of engineering ⛅ at the University of Waterloo 🤍</h1>
                    <h3>Previously developing <a href="https://www.playstation.com/en-ca/" className="underline">@PlayStation</a> <a href="https://global.medical.canon/" className="underline">@Canon</a> and<a href="https://www.centrefordigitaltherapeutics.ca/" className="underline">@University Health Network</a>.</h3>
                    <h3>Currently seeking <span className="underline">2025 new grad SWE opportunities.</span></h3>

                 <div className="main-btns">
                        <a href="/work">
                            <button href="#/work" className="btn-blue">work</button>
                        </a>
                        <a href={resume}>
                            <button className="btn-blue">resume</button>
                        </a>
                    </div>
                </div>

                <div className="projects-display">
                    <h1>Life Lately</h1>
                        <Grid container spacing={3} className='project-grid'>
                            <Grid className='project-card' item>
                                <Card title="AI Breast Cancer Classifier" date="Design Project | March 2023" tag="Software" body="Evaluating multiple Artificial Intelligence techniques (linear, SVM, Neural Networks, Random Forest) in the classificiation of breast cancer on the Wisconsin Breast Cancer Dataset. Both custom algorithms (linear classification and SVM) and sklearn classifiers (Neural Network, Random Forest) were implemented and visualized with numpy." linkName="Github" linkURL="https://github.com/amenasyed/ai-breast-cancer-classification" imgURL={ai} ></Card>
                            </Grid>

                            <Grid className='project-card' item>
                                <Card title="Ma'rifa 2023 Conference Website" date="Ma'rifa Programs Inc | March 2023" tag="Software" body="A complete overhaul (including both design and development) of Ma'rifa's 2023 conference website, supporting 300+ attendees." linkName="GitHub" linkURL="https://github.com/mraza007/marifa/tree/amena-final" imgURL={marifa} ></Card>
                            </Grid>

                            <Grid className='project-card' item>
                                <Card title="mood FM" date="Hack The North | September 2022" tag="Software" body="mood FM provides you with your own personal mixtape (a personalized 'radio channel,' if you will), to play background music suited to the nuanced mood of your conversation." linkName="Devpost" linkURL="https://devpost.com/software/mood-fm" imgURL={moodFM} ></Card>
                            </Grid>

                        </Grid>
                </div>
            </div>

        </div>
        
    );
}

export default Main;