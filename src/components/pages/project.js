import React from "react";
import Layout from '../layout.js'
import RetroDex from '../retrodex.js'
import { useParams } from "react-router-dom";
import projectsData from '../../projects.json'

function Project(props) {
    const {projectID} = useParams()
    console.log(projectID)
        return (
           <Layout>
            <RetroDex id={projectsData[projectID].id + 1} skills={projectsData[projectID].skills} name={projectsData[projectID].name} type="Project" description={projectsData[projectID].description} github={projectsData[projectID].github} image={projectsData[projectID].image} sites={[["Live Site", projectsData[projectID].site]]} />
        </Layout> 
        ) 
    } 

export default Project