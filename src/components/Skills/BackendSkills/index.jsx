import React from 'react';
import Node from "./items/Node";
import Php from "./items/Php";
import Laravel from "./items/Laravel";
import Python from "./items/Python";
import Java from "./items/Java";
import MySQL from "./items/MySQL";
import Linux from "./items/Linux";
import Docker from "./items/Docker";
import "./../style.css";


const BackendSkills = () => {
    return (
        <ul className="content-list">
            <h2 className="title-2">Backend</h2>
            <li className="content-list__item">
                <Php />
                <Python />
                <Java />
                <Laravel />
                <Node />
                <MySQL />
                <Linux />
                <Docker />
            </li>
        </ul>
    )
}

export default BackendSkills;
