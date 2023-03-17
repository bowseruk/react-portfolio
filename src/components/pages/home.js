import React, { Component } from "react";
import './home.css'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        };
    }
    render() {
        return <article className="home">
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
    </article>
    }       
}

export default Home