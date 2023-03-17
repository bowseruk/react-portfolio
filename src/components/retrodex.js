import React, { Component } from "react";
import './retrodex.css'


class RetroDex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        };
    }
    render() {
        return <div className="home">
            <div className="retrodex-top">
                <div className="retrodex-top-left">
                    <img></img>
                </div>
                <div className="retrodex-top-right">
                    <h2>Adam Bolsover</h2>
                    <p>Web Developer</p>
                    <a>Github</a>
                    <a>LinkedIn</a>
                </div>
            </div>
            <div className="retrodex-bottom">
                <p>Adam Bolsover is a Web Development Master from Gainsborough</p>

            </div>
            <h2>Adam Bolsover</h2>
            <p>Adam Bolsover is a Web Development Master from Gainsborough.</p>
            <p>His special abilities include</p>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Bootstrap</li>
                <li>JQuery</li>
                <li>React</li>
            </ul>
            <p>He can be found at:</p>
            <ul>
                <li>Github</li>
                <li>LinkedIn</li>
            </ul>
        </div>
    }
}

export default RetroDex