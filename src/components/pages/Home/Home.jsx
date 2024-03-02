import React from 'react';
import { Link } from 'react-router-dom';
import photo from './Photo.jpeg';
import './Home.css';



function Home() {
  return (
    <div className='homeclass'>

   
      <h1 className='heading'>Hi! I am <span className='spani'>Niroshi!</span> </h1>
     <div className='myimgdiv'>
     <img className='myimg' src={photo} alt="Niroshi" />
     </div>
      
<div className='mycontent ps-lg-5 ps-md-5 ls-wide'>
<h2 className="heading2">Welcome to my portfolio site! </h2>
   
      <div className=" ps-lg-5 ps-md-5 ls-wide">
        <p className='para'><span className='spani2'>I</span> am a Junior front-end developer with exceptional UI designing skills 
          and a foundational understanding of back-end development.
      I have demonstrated the ability to collaborate with a team of designers 
          and developers to create a website that meets the needs of the client and 
          is delivered on time.
     I am a quick learner and a team player who is eager to learn new technologies 
          and frameworks to improve my skills and knowledge.
      I am currently looking for a position as a front-end developer to further my
            skills and knowledge in the field.</p>
      </div>

</div>
     
      

      <h3 id="h3">Please feel free to look around and contact me if you have any questions.</h3>
      <Link to="/contact" className='linki'>Contact Me</Link>
    </div>
    
   
   
  )
}

export default Home