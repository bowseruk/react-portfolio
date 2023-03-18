import React, { Component } from "react";
import Layout from '../layout.js'
import RetroDex from '../retrodex.js'
import { useParams } from "react-router-dom";


class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {      
        };
    }
    params = useParams()
    render() {
        return <Layout>
            <RetroDex></RetroDex>
        </Layout>
    }       
}

export default Project