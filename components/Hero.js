import React from "react";
import "../styles/styles.css";
import "../styles/Hero.css";

function Hero() {
    return (
        <div className="hero">
            <div className="bg">
                <img src="/images/hero.png"></img>
                <div className="content">
                    <p className="title">rekindle</p>
                    <p className="little">Fortifying Human Connection</p>
                </div>
                <a className="ref" href="#about"><p className="learn">Learn more <i className="fa-solid fa-angles-down"></i></p></a>
            </div>
        </div>
    );
}

export default Hero;