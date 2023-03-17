import React, { Component } from "react";
import './stats-bar.css'

class StatsBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Ash",
            level: 99,
            currentHP: 10,
            maxHP: 10
        };
    }
    render() {
        return <div className="stats-bar">
            <div className="stats-bar-top">
            <span className="stats-bar-name">{this.state.name}</span><span className="level">lvl {this.state.level}</span>
            </div>
                <div  className="stats-bar-bottom">
                    <label>HP</label><progress className="hp" value={this.state.currentHP} max={this.state.maxHP} >{this.state.currentHP / this.state.maxHP}</progress>
                </div>
            </div>
    }       
}

export default StatsBar;