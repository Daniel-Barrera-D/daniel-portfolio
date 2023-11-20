import React, { useContext } from "react";
import './Projects.css';
import ProjectCard from "../ProjectCard/ProjectCard";
import { projectsData } from "../../ProjectData";
import { RefsContext } from "../../Context/RefsProvider";

const Projects = () => {

    const { projectsRef } = useContext(RefsContext);

    return(
        <section className="section-projects" ref={ projectsRef }>
            <h2 className="section-title">My Projects</h2>
            <div className="projects-grid">
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} projectData={project}/>
                ))}
            </div>
        </section>
    )
}

export default Projects;