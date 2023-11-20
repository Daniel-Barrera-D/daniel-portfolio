import React from "react";
import About from "../Components/About/About";
import Projects from "../Components/Projects/Projects";
import Skills from "../Components/Skills/Skill";
import Contact from "../Components/Contact/Contact";
import useSEO from "../Hooks/useSEO";

const Home = () => {

    useSEO({
        title: 'Daniel Barrera Devia | Portfolio'
    })

    return(
        <>
            <About />
            <Skills />
            <Projects />
            <Contact />
        </>
    )
}

export default Home;