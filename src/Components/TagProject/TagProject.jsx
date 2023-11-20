import React from "react";
import './TagProyec.css';

const TagProject = (props) => {

    const { text } = props;
    return (
        <span className="tag">{text}</span>
    )
}

export default TagProject;