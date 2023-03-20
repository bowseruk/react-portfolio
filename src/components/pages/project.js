import React, { Component } from "react";
import Layout from '../layout.js'
import RetroDex from '../retrodex.js'
// import { useParams } from "react-router-dom";
import projectsData from '../../projects.json'



class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {      
        };
    }
    // params = useParams()
    render() {
        return <Layout>
            <RetroDex id={projectsData[0].id} skills={projectsData[0].skills} name={projectsData[0].name} type="Project" description={projectsData[0].description} github={projectsData[0].github} image={projectsData[0].image} sites={[["Live Site", projectsData[0].site]]} />
        </Layout>
    }       
}

export default Project