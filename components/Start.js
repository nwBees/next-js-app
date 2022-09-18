import React from "react";
import "../styles/styles.css";
import "../styles/Start.css";

function Start() {
    return (
        <div className="start">
            <div className="bg">
                <img src="/images/start.png"></img>
                <div className="content">
                    <p className="title">Get Started</p>
                    <div className="start2">
                        <button className="talk"><a href="/caller">Talk to someone</a></button>
                    </div>
                    <p className="little">Admin? Enter <a href="/admin"><span>here</span></a></p>
                </div>
                
            </div>
            
            
        </div>
    );
}

export default Start;