import React, {useState} from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import workData from "./workData";
import Project from "./Project";
import "./Work.css"

function createProject(project){
    return(<Project
        id={project.id}
        tag={project.tag}
        title={project.title} 
        date={project.date} 
        body1={project.body1} 
        body2={project.body2} 
        linkName={project.linkName} 
        linkURL={project.linkURL} 
        ></Project>);
}


function Work() {

    const [projectItem, setProjectItem] = useState(workData);
    const [pressed, setPressed] = useState(false);
    
    let btnStyle = "btn-blue";

    const handleBtns = (e) => {
        setPressed(!pressed)

        let word = e.target.value;

        if(word === "All"){
            setProjectItem(workData)
            btnStyle = "btn-blue pressed"
        }
        else if(word === "Software"){
            const filtered = workData.filter(workData => workData.tag === "Software")
            setProjectItem(filtered)
            btnStyle = "btn-blue pressed"
        }
        else if(word === "Hardware"){
            const filtered = workData.filter(workData => workData.tag === "Hardware")
            setProjectItem(filtered)
            btnStyle = "btn-blue pressed"
        }
        else if(word === "Data"){
            const filtered = workData.filter(workData => workData.tag === "Data")
            setProjectItem(filtered)
            btnStyle = "btn-blue pressed"
        }
        else if(word === "UX/UI"){
            const filtered = workData.filter(workData => workData.tag === "UX/UI")
            setProjectItem(filtered)
            btnStyle = "btn-blue pressed"
        }
    }

    console.log(pressed);

    return (
        <div>
            <Navbar></Navbar>

            <div className="work-container">
                <h1>Projects</h1>

                <div className="toggle-btns">
                    <button value="All" onClick={handleBtns} className={btnStyle} >all</button>
                    <button value="Software" onClick={handleBtns} className={btnStyle} >software</button>
                    <button value="Hardware" onClick={handleBtns} className={btnStyle} >hardware</button>
                    <button value="Data" onClick={handleBtns} className={btnStyle} >data</button>
                    {/* <button value="UX/UI" onClick={handleBtns} className={btnStyle} >ux/ui</button> */}
                </div>

                {projectItem.map(createProject)}

            </div>

            <Footer></Footer>
        </div>
    );
}

export default Work;