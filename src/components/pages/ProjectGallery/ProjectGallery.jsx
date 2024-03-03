import React from "react";
import { Link } from "react-router-dom";
import projectdata from "../../../projectdata";
import Project from "../Project/Project"





function ProjectGallery() {
  return (
    <div>
  
    <ul>
        {projectdata.map((project) => (
          <li key={project.id}>
            <Project data={project} />
          </li>
        ))}
    </ul>
  
      </div>
    );
  }


export default ProjectGallery;