import React, { Component } from "react";
import Layout from '../layout.js'
import BattleScene from "../battleScene.js";
import './home.css'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        };
    }
    render() {
        return <Layout><BattleScene name="Home"></BattleScene></Layout>
    }       
}

export default Home