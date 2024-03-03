import React from "react";
import { Link } from "react-router-dom";
import Projectdata from "../../../Projectdata";
import Project from "../Project/Project"





function ProjectGallery() {
  return (
    <div>
  
    <ul>
        {Projectdata.map((project) => (
          <li key={project.id}>
            <Project data={project} />
          </li>
        ))}
    </ul>
  
      </div>
    );
  }


export default ProjectGallery;