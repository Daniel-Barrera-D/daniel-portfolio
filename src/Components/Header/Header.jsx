import './Header.css'
import Navbar from "../Navbar/Navbar";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Header = () => {

    const [position, setPosition] = useState(window.scrollY);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            let moving = window.scrollY;

            setVisible(position > moving);
            setPosition(moving);
        }
        window.addEventListener("scroll", handleScroll);
        return(() => {
            window.removeEventListener("scroll", handleScroll);
        });
    });

    const newClass = visible ? 'visible' : 'hidden';

    return(
        <header className={`header ${newClass}`}>
                <Link to="/" className="header-name">
                    <span>&lt;daniel.</span>
                    <span className="accent-color">dev </span>/&gt;
                </Link>
                <Navbar />
        </header>
    )
}

export default Header;