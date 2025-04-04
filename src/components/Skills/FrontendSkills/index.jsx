import React from 'react';
import Bootstrap from "./items/Bootstrap";
import Css from "./items/Css";
import Git from "./items/Git";
import Html from "./items/Html";
import JavaScript from "./items/JavaScript";
import React from "./items/React";
import Sass from "./items/Sass";
import VisualStudio from "./items/VisualStudio";
import "./../style.css";

const FrontendSkills = () => {
    return (
        <div className="content-list">
            <h2 className="title-2">Frontend</h2>
            <div className="content-list__item">
                <JavaScript />
                <React />
                <VisualStudio />
                <Html />
                <Css />
                <Sass />
                <Bootstrap />
                <Git />
            </div>
        </div>
    )
}

export default FrontendSkills;
