import React, { Component } from "react";
import Layout from '../layout.jsx'
import BattleScene from "../battleScene.jsx";
import './home.css'
import opponent from '../characters/retro-home.png'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        };
    }
    render() {
        return <Layout><BattleScene name="Home" retrodexLink="/about"><img className="opponent-img" src={opponent} alt="opponent character" /></BattleScene></Layout>
    }       
}

export default Home