
import React from 'react';
import './Project.css';
 import {Link} from 'react-router-dom';



  




function Project({ data }) {

  
  return (
    <>
   
    <div className="project ps-lg-5 ps-md-5 ls-wide">
    
      <h2>{data.title}</h2>
      <div className=" ps-lg-5 ps-md-5 ls-wide">
      <a href={data.deployedLink} target="_blank" rel="noopener noreferrer">Live Version</a>
      <a href={data.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </div>
    
      <img className='image' src={data.image} alt={`Screenshot of ${data.image}`} />

      {/* <Link to={`/projects/${data.id}`}>More Details</Link> */}
    </div>
    </>
  );
}
export default Project;