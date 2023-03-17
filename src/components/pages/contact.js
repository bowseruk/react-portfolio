import React, { Component } from "react";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        };
    }
    render() {
        return <article className="contact">
            <h2>Contact</h2>
    </article>
    }       
}

export default Contact