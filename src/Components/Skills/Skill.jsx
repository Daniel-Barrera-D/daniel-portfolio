import React, { useContext } from "react";
import './Skill.css';
import CardSkill from "../CardSkill/CardSkill";
import { RefsContext } from "../../Context/RefsProvider";
import { useTranslation } from "react-i18next";

const Skills = () => {

    const icoHTML = '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 48 48"><path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path></svg>';
    const icoCSS = '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 48 48"><path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path></svg>'
    const icoJS = '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 48 48"><path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path></svg>'
    const icoReact = '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 48 48"><path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path><path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path><path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path><circle cx="24" cy="24" r="4" fill="#80deea"></circle></svg>'
    const icoMUI = '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 48 48"><polygon fill="#29b6f6" points="1,5 7,9 7,29 1,25"></polygon><polygon fill="#0288d1" points="47,20 41,24 41,37 47,33"></polygon><polygon fill="#0288d1" points="47,6 41,10 41,17 47,13"></polygon><polygon fill="#0288d1" points="35,5 29,9 29,29 35,25"></polygon><polygon fill="#29b6f6" points="1,12 18,23 18,16 1,5"></polygon><polygon fill="#0288d1" points="35,12 18,23 18,16 35,5"></polygon><polygon fill="#0288d1" points="35,26 18,37 18,30 35,19"></polygon><polygon fill="#0288d1" points="47,34 30,45 30,38 47,27"></polygon><polygon fill="#29b6f6" points="30,37.765 18,30 18,37 30,44.765"></polygon></svg>'

    const { skillsRef } = useContext(RefsContext);
    const { t } = useTranslation("global");

    return(
        <section className="section-skills" ref={skillsRef}>
            <h2 className="section-title">{t("section-skills.title")}</h2>
            <div className="skills">
                <CardSkill icono={icoHTML}/>
                <CardSkill icono={icoCSS}/>
                <CardSkill icono={icoJS}/>
                <CardSkill icono={icoReact}/>
                <CardSkill icono={icoMUI}/>
            </div>
        </section>
    )
}

export default Skills;