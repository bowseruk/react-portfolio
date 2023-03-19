import React, { Component } from "react";
import Layout from '../layout.js'
import BattleScene from "../battleScene.js";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {   
            project: 0   
        };
    }
    render() {
        return <Layout><BattleScene name="Project" retrodexLink={`/project/${this.state.project}`}><div><span>-</span><span>Character</span><span>+</span></div></BattleScene></Layout>
    }      
}

export default Projects