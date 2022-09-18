import React from "react";
/*import "../styles/styles.css";
import "../styles/Start.css";*/
import styles from './Start.module.css';

function Start() {
    return (
        <div className={styles.start}>
            <div className={styles.bg}>
                <img src="/images/start.png"></img>
                <div className={styles.content}>
                    <p className={styles.title}>Get Started</p>
                    <div className={styles.start2}>
                        <button className={styles.talk}><a href="/caller">Talk to someone</a></button>
                    </div>
                    <p className={styles.little}>Admin? Enter <a href="/admin"><span>here</span></a></p>
                </div>
                
            </div>
            
            
        </div>
    );
}

export default Start;