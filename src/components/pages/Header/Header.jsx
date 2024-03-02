import React from "react";
import { NavLink } from "react-router-dom";
import faceImage from './Face.jpeg';
import './Header.css';



function Header() {
  return (
   
   <nav className="navbar navbar-expand-sm  navbar-light ">
    <div className="container-fluid">
     <a className="navbar-brand" href="#">
     <img src={faceImage} alt="Avatar Logo"  className="rounded-pill"/> 
      </a>   

     <ul className="navbar-nav ">
        <li className="nav-item p-3">
          <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Home
          </NavLink>
        </li>
        <li className="nav-item p-3 ">
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Contact
          </NavLink>
        </li>
        <li className="nav-item p-3">
          <NavLink to="/projectgallery" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Project Gallery
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>   

)
}

export default Header

