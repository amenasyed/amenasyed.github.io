import React from "react";

const workData = [
    {
        id: 1,
        tag:"Software",
        title: "Ma'rifa 2023 Conference Website",
        date: "Ma'rifa Programs Inc | March 2023",
        body1:"A complete overhaul (including both design and development) of Ma'rifa's 2023 conference website, supporting 300+ attendees.",
        body2:"Technologies: React, NextJS, Figma",
        linkName:"GitHub",
        linkURL:"https://github.com/mraza007/marifa/tree/amena-final"

    },

    {
        id: 2,
        tag:"Software",
        title: "AI-Based Classification of Breast Cancer",
        date: "Design Project | March 2023",
        body1:"Evaluating multiple Artificial Intelligence Techniques (linear, SVM, Neural Networks, Random Forest) in the classificiation of breast cancer on the Wisconsin Breast Cancer Dataset. Both custom algorithms (linear classification and SVM) and sklearn classifiers (Neural Network, Random Forest) were implemented and visualized with numpy.",
        body2:"Technologies: Python (sklearn, numpy)",
        linkName:"GitHub",
        linkURL:"https://github.com/amenasyed/ai-breast-cancer-classification"

    },

    {
        id: 3,
        tag:"Hardware",
        title: "Ultrasound Imaging Device for Hand Gesture Detection",
        date: "Design Project | November 2023",
        body1:"A simple ultrasound imaging device using an ultrasonic sensor to distinguish between 3 hand gestures; rock, paper and scissors. To capture a high quality image, the sensor was translated in the x and y planes using a mechanical pulley system.",
        body2:"Technologies: SolidWorks, Python, Arduino",
        linkName:"GitHub",
        linkURL:"https://github.com/amenasyed/ultrasound-imaging"

    },
    
    {
        id: 4,
        tag:"Software",
        title: "mood FM",
        date: "Hack The North | September 2022",
        body1:"mood FM is a web application that listens to your ambient environment and interprets the contents of your speech to determine the mood you’re in. Then, it finds a song to complement that mood automatically so you always have the perfect soundtrack playing in the background. mood FM also tracks your emotions on a daily and weekly basis to help you spot potential trends and ensure you’re taking care of yourself.",
        body2:"Technologies: React, Python, Material UI, AWS Transcribe API, Cohere NLP API, Spotify API",
        linkName:"Devpost",
        linkURL:"https://devpost.com/software/mood-fm"
    },

    {
        id: 5,
        tag:"Software",
        title: "Portfolio",
        date: "Personal Project | September 2022",
        body1:"This personal portfolio was built with React (using React Router for page routing), Material UI, and hosted on Github.",
        body2:"Technologies: React, Material UI, GitHub",
        linkName:"GitHub",
        linkURL:"https://github.com/amenasyed/amenasyed.github.io"
    },

    {
        id: 6,
        tag:"Hardware",
        title: "deciSense",
        date: "Design Project | July 2022",
        body1:"deciSense is a device aimed to detect harmful environmental noise and alerts the user to prevent temporary and permanent hearing damage. The general design consists of an Arduino connected to a sound sensor and LED lights. Real-time visual feedback is given through the LEDs along with daily data analytics as extracted and processed in Python.",
        body2:"Technologies: Arduino, C++, Python, SolidWorks, Figma, GitHub",
        linkName:"GitHub",
        linkURL:"https://github.com/amenasyed/deciSense"
    },

    {
        id: 7,
        tag:"Software",
        title: "Cochlear Implant Processor",
        date: "Design Project | July 2022",
        body1:"A simple cochlear implant sound processor constructed using Matlab’s filterDesigner and evaluated by how well the rectified signals matched original testing sound files. The final processed output signal consists of N combined frequency bands. One iteration of the initial design solution was performed by changing the Highpass and Bandpass filter types and the number of frequency channels (N).",
        body2:"Technologies: Matlab",
        linkName:"GitHub",
        linkURL:"https://github.com/amenasyed/cochlear-implant-signal-processor"
    },

    {
        id: 8,
        tag:"Software",
        title: "CEMCOD Website Redesign",
        date: "Engineers Without Borders | April 2022",
        body1:"Redesigned CEMCOD’s website using HTML/CSS in Wordpress, streamlining access to digital media for 250+ members in Uganda.",
        body2:"Technologies: Wordpress, HTML/CSS, Figma"

    },

];

export default workData;