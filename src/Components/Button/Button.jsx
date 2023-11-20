import React from "react";
import './Button.css'
import { Link } from "react-router-dom";

const Button = (props) => {
    const { text, size, color, icono, path, func } = props
    return(
        <Link to={path} className={`about-button ${size} ${color}`} onClick={func}>
            { text }
            <img className="icono-skill"  src={`data:image/svg+xml;utf8,${encodeURIComponent(icono)}`} alt="" />
            {/* <image className="icono" dangerouslySetInnerHTML={{ __html: icono}}/> */}
        </Link>
    )
}

export default Button;