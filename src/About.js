import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {Grid} from "@mui/material";
import me from "./images/me.png";
import "./About.css"

function About() {
    return (
        <div>
            <Navbar></Navbar>

            <Grid className="about-container" container spacing={3}>
                <Grid item sm={12} md={6}>
                    <img src={me} className="about-img"></img>
                </Grid>

                <Grid item sm={12} md={6}>
                    <div className="about-text-container">
                        <h1 className="about-heading">About</h1>
                        <p className="about-paragraph">I’m a fourth-year Engineering student at the<a href="https://uwaterloo.ca/biomedical-engineering/" className="underline-links">University of Waterloo</a> working towards a<a href="https://ugradcalendar.uwaterloo.ca/page/ENG-Biomedical-Engineering" className="underline-links">BASc in Biomedical Engineering.</a></p>


                        <h3 className="about-subheading">What inspires me.</h3>
                        <p className="about-paragraph">I believe in the ability of design to empower others, bridge the social inequality gap and overall improve the lives of others.</p>
                        <p className="about-paragraph">I’m passionate about combining the interdisciplinary aspects of design, human psychology and technology to make a lasting social impact beyond aesthetics.</p>

                        <h3 className="about-subheading">What I’ve been up to.</h3>
                        <p className="about-paragraph">After wrapping up my final co-op term at PlayStation, I’m back on the school grind where I'm wrapping up my last 2 semesters of school. </p>
                        <p className="about-paragraph">I’m currently on the lookout for <span className="underlines">2025 new grad SWE</span> opportunities! I’m driven to better myself as an engineer by learning and engaging in new tech.</p>


                    </div>
                </Grid>

                {/* <h1 className="hobbies-title">What am I like outside of work? Glad you asked!</h1> */}
            </Grid>

            {/* <Grid container className="hobbies-container" spacing={0}>
                    <Grid item className="hobby" sm={12} md={5}>
                        <h3 className="hobby-title">📷 Amateur photographer</h3>

                        <p className="hobby-content">I’m such a “remember when....” type of person. </p>
                        <p className="hobby-content">I live vicariously through my camera roll, which is why I’m so fond of capturing moments in my life - whether it’s a sunset on an evening walk, a spontaneous selfie or a street musician wearing a horse costume, rest assured I have a picture of it! </p>
                        <p className="hobby-content">Check out my epic UK 2022 vlog<a href="https://youtu.be/sZarWpuxzWo" className="underline-link">here!</a></p>

                    </Grid>

                    <Grid item className="hobby" sm={12} md={5}>
                        <h3 className="hobby-title">🧶 Avid knitter</h3>

                        <p className="hobby-content">My toxic trait is spending waaaaay too much money on yarn. It's true! Once I actually got 30+ balls of yarn at a garage sale for $10. My mum was not impressed. </p>
                        <ul className="hobby-content">
                            <li>🧵 First ever project: a mug cozy</li>
                            <li>👜 Latest project: a floral tote bag</li>
                            <li>👕 Favourite project: Raglan knitted sweater </li>
                        </ul>

                    </Grid>

                    <Grid item className="hobby" sm={12} md={5}>
                        <h3 className="hobby-title">💼 The Office enthusiast</h3>

                        <p className="hobby-content">No elaboration needed. The ultimate comfort show. I live, laugh and love Dunder Mifflin. </p>
                        <p className="hobby-content">My top 5 favourite episodes (in no particular order):</p>
                        <ul className="hobby-content">
                            <li>🦶🏽 The Injury <a href="https://www.youtube.com/watch?v=m_HR_o0jDqw&ab_channel=TheOffice" className="underline-link single-space">(S2 Ep 12)</a></li>
                            <li>🌊 Dunder Mifflin Infinity <a href="https://www.youtube.com/watch?v=DOW_kPzY_JY&ab_channel=TheOffice" className="underline-link single-space">(S4 Ep 3/4)</a></li>
                            <li>🍷 Dinner Party <a href="https://www.youtube.com/watch?v=8H16SWHUAuM&ab_channel=TheOffice" className="underline-link single-space">(S4 Ep 13)</a></li>
                            <li>🏥 Stress Relief <a href="https://www.youtube.com/watch?v=gO8N3L_aERg&ab_channel=TheOffice" className="underline-link single-space">(S5 Ep 14/15)</a></li>
                            <li>👨‍👦 Nepotism <a href="https://www.youtube.com/watch?v=XX_WErDgCag&ab_channel=TheOffice" className="underline-link single-space">(S7 Ep 1)</a></li>
                        </ul>
                    </Grid>

                    <Grid item className="hobby" sm={12} md={5}>
                        <h3 className="hobby-title">🧭 Travel junkie</h3>

                        <p className="hobby-content">I've travelled to 4 of the 7 continents (although it does help to have family spread out across the globe) and counting!</p>
                        <ul className="hobby-content">
                            <li>🇬🇧 Most recent trip: the UK (England and Scotland)</li>
                            <li>🇮🇳 Next trip: Bangalore, India </li>
                            <li>🌴 Bucket list trip #1: Bali, Indonesia</li>
                            <li>🎈 Bucket list trip #2: Cappadocia, Turkey</li>
                            <li>🐪 Bucket list trip #3: Marrakesh, Morocco</li>
                        </ul>
                    </Grid>
                    
                </Grid> */}
            <Grid container className="hobbies-container"></Grid>

            <Footer></Footer>
        </div>
    );
}

export default About;