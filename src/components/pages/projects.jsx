import React, { useState } from "react";
import getChar from '../characters/char-images.jsx'
import Layout from '../layout.jsx'
import BattleScene from "../battleScene.jsx";
import './projects.css'
import projectsData from '../../projects.json'


function Projects(props) {
    const [project, setProject] = useState(0)
    return (
    <Layout>
        <BattleScene name={`Project ${project + 1}`} retrodexLink={`/project/${project}`}>
            <div className="char-with-options">
                <div className="arrow arrow-left" onClick={() => setProject((project > 0) ? (project - 1) : projectsData.length - 1 )}></div>
                <img src={getChar(project)} alt="opponent character" />
                <div className="arrow arrow-right" onClick={() => setProject((project < projectsData.length -1) ? (project + 1) : 0 )}></div>
            </div>
        </BattleScene>
    </Layout>
    )
}      

export default Projects