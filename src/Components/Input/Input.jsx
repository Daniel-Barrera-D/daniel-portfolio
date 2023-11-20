import React from "react";
import './Input.css';

const Input = (props) => {

    const { text, name } = props;

    return(
        <div className="input-field">
            <input className="input-form" type="text" name={name} required/>
            <label>{text}</label>
        </div>
    )
}

export default Input;