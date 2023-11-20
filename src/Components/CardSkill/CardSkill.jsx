import React from "react";
import './CardSkill.css';

const CardSkill = (props) => {
    const { icono } = props;

    return(
        <article className="skill-card">
            <img className="icono-skill"  src={`data:image/svg+xml;utf8,${encodeURIComponent(icono)}`} alt="icon-skill" />
        </article>
    )
}

export default CardSkill;