import React, { useContext } from "react";
import './Breadcums.css'
import { Link } from "react-router-dom";
import useScrollToRef from "../../Hooks/useScrollToRef";
import { RefsContext } from "../../Context/RefsProvider";
import { useTranslation } from "react-i18next";
const Breadcumbs = ({nameProject}) => {

    const { goToRef } = useScrollToRef();
    const { aboutMeRef, projectsRef } = useContext(RefsContext);
    const { t } = useTranslation("global");

    return(
        <nav className="breadcums-nav">
            <Link to={'/'} className="breadcums-element" onClick={()=>goToRef(aboutMeRef)}>
                <h4>{t("breadcums.home")}<span>&nbsp; {">"} &nbsp;</span></h4>
            </Link>
            <Link to={'/'} className="breadcums-element" onClick={()=>goToRef(projectsRef)}>
                <h4>{t("breadcums.projects")} <span>&nbsp; {">"} &nbsp;</span></h4>
            </Link>
            <h4>{nameProject}</h4>
        </nav>
    )
}

export default Breadcumbs;