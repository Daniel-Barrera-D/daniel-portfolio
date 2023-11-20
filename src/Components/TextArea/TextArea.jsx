import React from "react";
import './TextArea.css';

const TextArea = (props) => {

    const { text, name } = props;

    return(
        <div className="textarea-field">
            <textarea className="textarea-form" type="text" name={name} required/>
            <label>{text}</label>
        </div>
    )
}

export default TextArea;