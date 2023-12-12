import React from "react";
import './TagProject.css';

const TagProject = (props) => {

    const { text } = props;
    return (
        <span className="tag">{text}</span>
    )
}

export default TagProject;