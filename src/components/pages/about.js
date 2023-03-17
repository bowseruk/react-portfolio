import React, { Component } from "react";
import Layout from '../layout.js'
import RetroDex from '../retrodex.js'

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {      
        };
    }
    render() {
        return <Layout>
            <RetroDex skills={["HTML", "CSS", "Javascript", "Bootstrap", "JQuery", "React"]} name="Adam Bolsover" type="Web Developer" description="Adam Bolsover is a Web Development Master from Gainsborough, United Kingdom." />
        </Layout>
    }       
}

export default About