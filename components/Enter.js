import React from "react";
import { useState } from 'react';
import "../styles/styles.css";
import "../styles/Enter.css";

function Enter() {
    const [situation, setSituation] = useState("");

    const handleSubmit = (e) => {
        alert("We've received your response. Your ID will be 00000001");
        e.preventDefault();
    }
    
    return (
        <div className="enter">
            <div className="static-text">
                Tell me about what's going on.
            </div>
            <form className="form" id="myform">
                <textarea value={situation} onChange={(e) => setSituation(e.target.value)} placeholder="Start typing here..." rows="18" cols="130"></textarea>
            </form>
            <div className="btn-container">
                <button type="submit" form="myform" className="submit-btn" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}

export default Enter;