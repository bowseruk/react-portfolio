import React, { Component } from "react";
import getChar from '../characters/char-images.js'
import Layout from '../layout.js'
import BattleScene from "../battleScene.js";
import './projects.css'


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {   
            project: 4   
        };
    }
    render() {
        return <Layout><BattleScene name="Project" retrodexLink={`/project/${this.state.project}`}><div className="char-with-options"><span>-</span><img src={getChar(this.state.project)} alt="opponent character" /><span>+</span></div></BattleScene></Layout>
    }      
}

export default Projects