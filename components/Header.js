import React from "react";
import "../styles/styles.css";
import "../styles/Header.css";
import { Text, Button } from "@chakra-ui/react";

function Header() {
    return (
        <header className="header">
            <div className="title"><Text color="#5B8ADC">nwBees</Text></div>
            <div className="start">
                <Button colorScheme="#5B8ADC" variant="outline"><a href="/caller">Talk to someone</a></Button>
            </div>
        </header>
    );
}

export default Header;