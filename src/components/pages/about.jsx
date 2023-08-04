import React, { Component } from "react";
import Layout from '../layout.jsx'
import RetroDex from '../retrodex.jsx'
import headshot from '../../images/px_headshot.png'

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {      
        };
    }
    render() {
        return <Layout>
            <RetroDex id={1} skills={["HTML", "CSS", "Javascript", "Bootstrap", "JQuery", "React"]} name="Adam Bolsover" type="Web Developer" description="Adam Bolsover is a Web Development Master from Gainsborough, United Kingdom." github="https://github.com/bowseruk" image={headshot} sites={[["LinkedIn", "https://www.linkedin.com/in/adambolsover/"]]}  />
        </Layout>
    }       
}

export default About