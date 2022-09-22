import React from "react";
import "./Project.css";

function Project(projects) {
            return(
                <div className="project-container" key={projects.id}>
                    <div className="project-text">
                        <div className="card-title">
                            <h3>{projects.title}</h3>
                            <h4>{projects.date}</h4>
                        </div>

                        <a className="tag">{projects.tag}</a>

                        <div className="card-body">
                            <p>{projects.body1}</p>
                            <p>{projects.body2}</p>
                        </div>

                        <a className="proj underline" href={projects.linkURL}>{projects.linkName}</a>
                    </div>
                </div>
            );

}

export default Project;