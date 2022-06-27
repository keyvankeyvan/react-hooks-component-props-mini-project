import React from "react";

function ProjectItem(project){
    return (
        <aside>
            <img src="https://via.placeholder.com/215" alt="blog logo"/>
            <p>{project.preview}</p>
        </aside>
    )
}


export default ProjectItem