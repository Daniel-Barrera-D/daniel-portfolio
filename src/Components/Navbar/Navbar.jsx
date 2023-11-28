import React, { useContext, useState } from "react";
import './Navbar.css';
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
import { RefsContext } from "../../Context/RefsProvider";
import useScrollToRef from "../../Hooks/useScrollToRef";
import { useTranslation } from  "react-i18next"

const Navbar = () => {

    const { t } = useTranslation("global");

    const [menu, setMenu] = useState( false );
    const [isOpen, setOpen] = useState( false );

    const { aboutMeRef, skillsRef, projectsRef, contactRef } = useContext(RefsContext);
    const { goToRef } = useScrollToRef();

    const handleClickMenu = () => {
        setMenu(!menu);
        setOpen(!isOpen);
    }

    const handleCloseMenu = (ref) => {
        setMenu(false)
        setOpen(null);
        goToRef(ref);
    }

    menu ? document.body.style.overflow="hidden" : document.body.style.overflow="";

    return(
        <>
        <div className="header-icon-nav">
            <Hamburger toggled={isOpen} toggle={setOpen} size={25} onToggle={handleClickMenu}/>
        </div>
        <nav className={`header-nav ${ menu ? 'isActive' : ''}`}>
            <Link to="/" onClick={()=>handleCloseMenu(aboutMeRef)}>{t("nav.home")}</Link>
            <Link to="/" onClick={()=>handleCloseMenu(skillsRef)}>{t("nav.skills")}</Link>
            <Link to="/" onClick={()=>handleCloseMenu(projectsRef)}>{t("nav.projects")}</Link>
            <Link to="/" onClick={()=>handleCloseMenu(contactRef)}>{t("nav.contact")}</Link>
        </nav>
        </>
    )
}

export default Navbar;