import React, { Component } from "react";
import { Link } from "react-router-dom";
import StatsBar from './StatsBar.js'
import './battleScene.css'

class BattleScene extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <main className="main grass-theme">
                <div className="stats-bar-opponent"><StatsBar name={this.props.name} /></div>
                <div className="stats-bar-player"><StatsBar name="Adam" /></div>
                <div className="player">
                    <div className="ground"></div>
                </div>
                <div className="opponent">
                    <div className="opponent-window">{this.props.children}</div>
                    <div className="ground"></div>

                </div>
                <Link to="/about">
                    <div className="retrodex-icon">
                        <div className="retrodex-icon-body">
                            <div className="retrodex-icon-screen">R</div>
                        </div>
                    </div>
                </Link>
            </main>
        )
    }
}

export default BattleScene;