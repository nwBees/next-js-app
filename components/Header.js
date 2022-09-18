import React from "react";
/*import "../styles/styles.css";
import "../styles/Header.css";*/
import { Text, Button } from "@chakra-ui/react";
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.title}><Text color="#5B8ADC">nwBees</Text></div>
            <div className={styles.start}>
                <Button colorScheme="#5B8ADC" variant="outline"><a href="/caller">Talk to someone</a></Button>
            </div>
        </header>
    );
}

export default Header;