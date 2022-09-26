import React from "react";

const workData = [
    {
        id: 1,
        tag:"Software",
        title: "mood FM",
        date: "Hack The North | September 2022",
        body1:"mood FM is a web application that listens to your ambient environment and interprets the contents of your speech to determine the mood you’re in. Then, it finds a song to complement that mood automatically so you always have the perfect soundtrack playing in the background. mood FM also tracks your emotions on a daily and weekly basis to help you spot potential trends and ensure you’re taking care of yourself.",
        body2:"Technologies: React, Python, Material UI, AWS Transcribe API, Cohere NLP API, Spotify API",
        linkName:"Devpost",
        linkURL:"https://devpost.com/software/mood-fm"
    },

    {
        id: 2,
        tag:"Hardware",
        title: "deciSense",
        date: "Design Project | July 2022",
        body1:"deciSense is a device aimed to detect harmful environmental noise and alerts the user to prevent temporary and permanent hearing damage. The general design consists of an Arduino connected to a sound sensor and LED lights. Real-time visual feedback is given through the LEDs along with daily data analytics as extracted and processed in Python.",
        body2:"Technologies: Arduino, C++, Python, SolidWorks, Figma, GitHub",
        linkName:"GitHub",
        linkURL:"https://github.com/amenasyed/deciSense"
    },

    {
        id: 3,
        tag:"Software",
        title: "Cochlear Implant Processor",
        date: "Design Project | July 2022",
        body1:"A simple cochlear implant sound processor constructed using Matlab’s filterDesigner and evaluated by how well the rectified signals matched original testing sound files. The final processed output signal consists of N combined frequency bands. One iteration of the initial design solution was performed by changing the Highpass and Bandpass filter types and the number of frequency channels (N).",
        body2:"Technologies: Matlab",
        linkName:"GitHub",
        linkURL:"https://github.com/amenasyed/cochlear-implant-signal-processor"
    },

    {
        id: 4,
        tag:"Software",
        title: "Portfolio",
        date: "Personal Project | September 2022",
        body1:"This personal portfolio was built with React (using React Router for page routing), Material UI, and hosted on Github.",
        body2:"Technologies: React, Material UI, GitHub",
        linkName:"GitHub",
        linkURL:"https://github.com/amenasyed/amenasyed.github.io"
    },

    {
        id: 5,
        tag:"Software",
        title: "CEMCOD Website Redesign",
        date: "Engineers Without Borders | April 2022",
        body1:"Redesigned CEMCOD’s website using HTML/CSS in Wordpress, streamlining access to digital media for 250+ members in Uganda.",
        body2:"Technologies: Wordpress, HTML/CSS, Figma"

    },

    {
        id: 6,
        tag:"Data",
        title: "BME 2025 Class Profile",
        date: "Design Project | September 2022",
        body1:"An initiative that seeks to gather the collective experiences of University of Waterloo's Biomedical Engineering Class of 2025. Individual insights were gathered from the class via a survey, and the results were analyzed and visually depicted with Python.",
        body2:"Technologies: Python, GitHub, Google Sheets",
        linkName:"GitHub",
        linkURL:"https://github.com/JJamali/BME25-Class-Profile"

    },

];

export default workData;