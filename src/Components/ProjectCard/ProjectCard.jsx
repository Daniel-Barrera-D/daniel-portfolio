import React from "react";
import './ProjectCard.css';
import Btn from "../Button/Button";
import TagProject from "../TagProject/TagProject";
import { useTranslation } from "react-i18next";

const ProjectCard = (props) => {

    const { projectData } = props;
    const icono = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 9.00001L21 3.00001M21 3.00001H15M21 3.00001L12 12M10 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V14" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    const { t } = useTranslation("global")

    return(
        <article className="work-card">
            <img className="card-image" src={projectData.preview} alt={projectData.name} />
            <div className="card-info">
                <header className="card-header">
                    <Btn path={`/project/${projectData.path}`} text={t("button-card.text")} icono={icono} size="small" color="secondary"/>
                </header>
                <section className="card-section">
                    <h2 className="card-title">{ projectData.name }</h2>
                    <p className="card-description">{ projectData.description }</p>
                </section>
                <footer className="card-footer">
                    {projectData.tags.map((tag, index) => (
                        <TagProject key={index} text={tag}/>
                    ))}
                </footer>
            </div>   
        </article>
    )
}

export default ProjectCard;