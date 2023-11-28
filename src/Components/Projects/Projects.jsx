import React, { useContext } from "react";
import './Projects.css';
import ProjectCard from "../ProjectCard/ProjectCard";
// import { projectsData } from "../../ProjectData";
import { RefsContext } from "../../Context/RefsProvider";
import { useTranslation } from "react-i18next";
import ProjectData from "../../ProjectData";

const Projects = () => {

    const { projectsRef } = useContext(RefsContext);
    const { t } = useTranslation("global");

    const projectsData = ProjectData();

    return(
        <section className="section-projects" ref={ projectsRef }>
            <h2 className="section-title">{t("section-projects.title")}</h2>
            <div className="projects-grid">
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} projectData={project}/>
                ))}
            </div>
        </section>
    )
}

export default Projects;