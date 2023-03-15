import React, { Component } from "react";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        };
    }
    render() {
        return <article className="home">
            <h2>Home</h2>
    </article>
    }       
}

export default Home