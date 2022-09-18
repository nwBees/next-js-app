import React from "react";
/*import "../styles/styles.css";
import "../styles/About.css";*/
import styles from './About.module.css';

function About() {
    return (
        <div className={styles.about} id="about">
            <div className={styles.bg}>
                <img src="/images/about.png"></img>
            </div>
        </div>
    );
}

export default About;