import React, { useState } from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {

    const selectedTheme = localStorage.getItem("selectedTheme") || 'light';
    document.querySelector("body").setAttribute('data-theme', selectedTheme);
    const [theme, setTheme] = useState(selectedTheme);

    const addClass = () => {
        document.querySelector("body").setAttribute('data-theme', theme);
        localStorage.setItem("selectedTheme", theme);
    }

    addClass();

    const toggleTheme = (e) => {
        e.target.checked ? setTheme('dark') : setTheme('light');
    }
    
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
                defaultChecked = {selectedTheme === 'dark'}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
