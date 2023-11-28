import './Header.css'
import Navbar from "../Navbar/Navbar";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {

    const [position, setPosition] = useState(window.scrollY);
    const [visible, setVisible] = useState(true);
    const { i18n } = useTranslation("global");

    const handleLanguaje = (lang) => {
        const currentLanguaje = localStorage.getItem('languaje') || lang;
        const newLang = currentLanguaje === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLang);
        localStorage.setItem('languaje', newLang);
        i18n.language = currentLanguaje;
    }

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
    const classIcon = localStorage.getItem('languaje') === 'es' ? "es" : "en"

    return(
        <header className={`header ${newClass}`}>
            <div className='header-section'>
                <Link to="/" className="header-name">
                    <span>&lt;daniel.</span>
                    <span className="accent-color">dev </span>/&gt;
                </Link>
                <svg onClick={() => handleLanguaje(i18n.language)} className={`${classIcon}`} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="27" height="27" viewBox="0 0 48 48"><path fill="#CFD8DC" d="M15,13h25c1.104,0,2,0.896,2,2v25c0,1.104-0.896,2-2,2H26L15,13z"></path><path fill="#546E7A" d="M26.832,34.854l-0.916-1.776l0.889-0.459c0.061-0.031,6.101-3.208,9.043-9.104l0.446-0.895l1.79,0.893l-0.447,0.895c-3.241,6.496-9.645,9.85-9.916,9.989L26.832,34.854z"></path><path fill="#546E7A" d="M38.019 34l-.87-.49c-.207-.116-5.092-2.901-8.496-7.667l1.627-1.162c3.139 4.394 7.805 7.061 7.851 7.087L39 32.26 38.019 34zM26 22H40V24H26z"></path><path fill="#546E7A" d="M32 20H34V24H32z"></path><path fill="#2196F3" d="M33,35H8c-1.104,0-2-0.896-2-2V8c0-1.104,0.896-2,2-2h14L33,35z"></path><path fill="#3F51B5" d="M26 42L23 35 33 35z"></path><path fill="#FFF" d="M19.172,24h-4.36l-1.008,3H11l4.764-13h2.444L23,27h-2.805L19.172,24z M15.444,22h3.101l-1.559-4.714L15.444,22z"></path></svg>
            </div>
            <Navbar />
        </header>
    )
}

export default Header;