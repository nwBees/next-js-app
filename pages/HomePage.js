import React from "react";
//import Footer from "./components/footer.js";
import { ChakraProvider } from "@chakra-ui/react"
import Header from "../components/Header.js";
import Hero from "../components/Hero.js";
import About from "../components/About.js";

function HomePage() {
    return (
        <ChakraProvider>
            <Header></Header>
            <Hero></Hero>
            <About></About>
        </ChakraProvider>
        );
}

export default HomePage;