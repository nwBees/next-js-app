import React from "react";
import { useState } from 'react';
/*import "../styles/styles.css";
import "../styles/Enter.css";*/
import styles from './Enter.module.css';

function Enter() {
    const [situation, setSituation] = useState("");

    const handleSubmit = (e) => {
        alert("We've received your response. Your ID will be 00000001");
        e.preventDefault();
    }
    
    return (
        <div className={styles.enter}>
            <div className={styles.static-text}>
                Tell me about what's going on.
            </div>
            <form className={styles.form} id="myform">
                <textarea value={situation} onChange={(e) => setSituation(e.target.value)} placeholder="Start typing here..." rows="18" cols="130"></textarea>
            </form>
            <div className={styles.btn-container}>
                <button type="submit" form="myform" className={styles.submit-btn} onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}

export default Enter;