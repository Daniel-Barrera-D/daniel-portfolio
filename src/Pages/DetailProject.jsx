import React, { useEffect } from "react";
import Breadcumbs from "../Components/Breadcrumbs/Breadcumbs";
import '../Assets/CSS/DetailProject.css';
import { Link, useParams } from "react-router-dom";
import NotFound404 from "./NotFound404";
import useSEO from "../Hooks/useSEO";
import ProjectData from "../ProjectData";
import { useTranslation } from "react-i18next";

const DetailProject = ({ projects }) => {

    const { path } = useParams();
    const { t } = useTranslation("global");
    const project = projects.find(project => project.path === path);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useSEO({
        title: `Project ${project.name}`
    })

    if(!project) return <NotFound404 />;

    const projectsData = ProjectData();

    const projectIndex = projectsData.findIndex((project) => project.path === path);
    const nextProjectIndex = (projectIndex + 1) % projectsData.length;
    const preProjectIndex = (projectIndex - 1 + projectsData.length) % projectsData.length;

    const nextProject = projectsData[nextProjectIndex].path;
    const preProject = projectsData[preProjectIndex].path;

    return(
        <section className="project-detail-section">
            <h3 className="project-category">{project.category}</h3>
            <h2 className="project-title">{project.name}</h2>
            <Breadcumbs nameProject={project.name}/>
            <div className="project-detail-description">
                <section className="project-long-description">
                    <p dangerouslySetInnerHTML={{__html: project.longDescription}}></p>
                </section>
                <section className="project-detail-stack">
                    <h3>{t("tech-stack.text")}</h3>
                    {project.tags.map((tag, index) => (
                        <span key={index} >{tag}{index === project.tags.length -1 ? '.' : ', '}</span>
                    ))}
                    <div className="project-detail-links">
                        <a href={project.linkGithub} target="_blank" rel="noreferrer" className="icon-link">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="27" width="27" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                            GitHub
                        </a>
                        <a href={project.demo} target="_blank" rel="noreferrer" className="icon-link">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"></path></svg>
                            Live
                        </a>
                    </div>
                </section>
            </div>
            <div>
            {project.images.map((image, index) => (
                <React.Fragment key={index}>
                    <img className="project-detail-img" src={image.desktopSrc} alt="img-project"/>
                    <img className="project-detai-img-mobile" src={image.mobileSrc} alt=""/>
                </React.Fragment>
            ))}
            </div>
            <section className="project-detail-nav">
                <Link to={`/project/${preProject}`}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg>
                </Link>
                <Link to={`/project/${nextProject}`}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
                </Link>
            </section>
        </section>
    )
}

export default DetailProject;