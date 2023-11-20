import React, { useContext } from "react";
import './Breadcums.css'
import { Link } from "react-router-dom";
import useScrollToRef from "../../Hooks/useScrollToRef";
import { RefsContext } from "../../Context/RefsProvider";
const Breadcumbs = ({nameProject}) => {

    const { goToRef } = useScrollToRef();
    const { aboutMeRef, projectsRef } = useContext(RefsContext);

    return(
        <nav className="breadcums-nav">
            <Link to={'/'} className="breadcums-element" onClick={()=>goToRef(aboutMeRef)}>
                <h4>Home<span>&nbsp; {">"} &nbsp;</span></h4>
            </Link>
            <Link to={'/'} className="breadcums-element" onClick={()=>goToRef(projectsRef)}>
                <h4>Projects <span>&nbsp; {">"} &nbsp;</span></h4>
            </Link>
            <h4>{nameProject}</h4>
        </nav>
    )
}

export default Breadcumbs;