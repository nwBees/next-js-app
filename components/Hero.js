import React from "react";
/*import "../styles/styles.css";
import "../styles/Hero.css";*/
import styles from './Hero.module.css';

function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.bg}>
                <img src="/images/hero.png"></img>
                <div className={styles.content}>
                    <p className={styles.title}>nwBees</p>
                    <p className={styles.little}>Tagline tagline tagline tagline.</p>
                </div>
                <a className={styles.ref} href="#about"><p className={styles.learn}>Learn more <i className="fa-solid fa-angles-down"></i></p></a>
            </div>
        </div>
    );
}

export default Hero;