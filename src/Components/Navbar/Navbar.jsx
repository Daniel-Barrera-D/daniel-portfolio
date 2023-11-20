import React, { useContext, useState } from "react";
import './Navbar.css';
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
import { RefsContext } from "../../Context/RefsProvider";
import useScrollToRef from "../../Hooks/useScrollToRef";

const Navbar = () => {

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
            <Link to="/" onClick={()=>handleCloseMenu(aboutMeRef)}>Home</Link>
            <Link to="/" onClick={()=>handleCloseMenu(skillsRef)}>Skills</Link>
            <Link to="/" onClick={()=>handleCloseMenu(projectsRef)}>Projects</Link>
            <Link to="/" onClick={()=>handleCloseMenu(contactRef)}>Contact</Link>
        </nav>
        </>
    )
}

export default Navbar;