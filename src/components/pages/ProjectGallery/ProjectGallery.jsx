import React from "react";
import { Link } from "react-router-dom";
import projectsData from "../../../projects.json";
import Project from "../Project/Project"





function ProjectGallery() {
  return (
    <div>
  
    <ul>
        {projectsData.map((project) => (
          <li key={project.id}>
            <Project data={project} />
          </li>
        ))}
    </ul>
  
      </div>
    );
  }


export default ProjectGallery;