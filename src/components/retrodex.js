import React, { Component } from "react";
import './retrodex.css'


class RetroDex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        };
    }
    renderSkills() {
        if (this.props.skills.length > 0) {
            return <div><p>Demonstrating the following skills:</p><ul> 
                {this.props.skills.map(element => <li key={element}>{element}</li>) }</ul></div>
        }
        return null;
    }
    render() {
        return <div className="retrodex">
            <div className="retrodex-screen">
            <div className="retrodex-top">
                
                <div className="retrodex-top-left">
                    <img src={this.props.img} alt="character" />
                </div>
                <div className="retrodex-top-right">
                    <h2>{this.props.name}</h2>
                    <p>{this.props.type}</p>
                    <a href={this.props.github}>Github</a>
                    <a>LinkedIn</a>
                </div>
            </div>
            <div className="retrodex-bottom">
                <p>{this.props.description}</p>
                {this.renderSkills()}
            </div>
            </div>
        </div>
    }
}

export default RetroDex