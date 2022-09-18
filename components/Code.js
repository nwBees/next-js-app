import React from "react";
import { useState } from "react";
import "../styles/styles.css";
import "../styles/Code.css";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";

function Code() {
    const [code, setCode] = useState("");
    const correctCode = "HTN2022"

    /*const handleSubmit = (e) => {
        e.preventDefault();
        if (code == correctCode) {
            Navigate('/authenticated');
        } else {
            alert("Wrong code. Try again.");
        }
        
    }*/

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (code == correctCode) {
            navigate("/admin/authenticated");
        } else {
            alert("Wrong code. Try again.");
        }
        
    }

    return (
        <Box className="code" textAlign="center">
            <div className="title">Enter the code provided to you.</div>
            <form className="code-form" id="myform2">
                <input className="text-st" value={code} onChange={(e) => setCode(e.target.value)} type="text" placeholder="Type here..."></input>
            </form>
            <Button 
            mt="40px"
            transition="0.3s ease" 
            backgroundColor="#FEF4EA" 
            p="15px" 
            borderRadius="12px" 
            border="1px solid #5B8ADC" 
            color="#5B8ADC"
            _hover={{bc: '#5B8ADC'}}
            type="submit"
            form="myform2"
            onClick={handleSubmit}
            >Submit</Button>
            {/* <button type="submit" form="myform2" className="submit-btn" onClick={handleSubmit}>Submit</button> */}
        </Box>
    );
}

export default Code;