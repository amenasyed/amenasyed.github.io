import React from 'react';
import "./Card.css";


function Card(props) {

    return (
        <div className="parent-card">
            <div className="card-container">

                <div className="image-container">
                    <img width="350px" src={props.imgURL}></img>
                </div>

                <div className="text-container">
                    <a className="tag">{props.tag}</a>
                    <div className="card-title">
                        <h3>{props.title}</h3>
                        <h4>{props.date}</h4>
                    </div>

                    <div className="card-body">
                        <p>{props.body}</p>
                    </div>

                    <a className="proj underline" href={props.linkURL}>{props.linkName}</a>
                </div>

            </div>
        </div>
    );
}

export default Card;

