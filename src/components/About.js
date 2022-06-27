import React from "react";
import ProjectItem from "./ProjectItem"

function About({projects}){
    const projectList = projects.map((project) => {
        return (
            <ProjectItem key={project.id} preview={project.preview} src="https://via.placeholder.com/215"/>
        )
    })

    return(
        <div id="project-list">{projectList}</div>
    )
}

export default About