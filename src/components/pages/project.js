import React, { Component } from "react";
import Layout from '../layout.js'
import RetroDex from '../retrodex.js'

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {      
        };
    }
    render() {
        return <Layout>
            <RetroDex></RetroDex>
        </Layout>
    }       
}

export default Project