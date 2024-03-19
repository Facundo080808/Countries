import React from "react";
import {useState} from "react"
import "../Landing/Landing.css"
import Home from "../Home/Home.jsx";
import { useEffect } from 'react';
import { Link } from "react-router-dom";

function Landing(){
  
    
      return (
        <div  className="body">
        
          <Link to="/home">
          <button type="button" className="button" ><h1 className="h1Landing">Home</h1></button>
          </Link>
        
        </div>
      );
}

export default Landing