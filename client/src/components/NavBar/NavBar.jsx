import React from "react";
import "./NavBar.css";
import {Link} from "react-router-dom"
export default function NavBar() {
    return(
    <div className="navDiv">
        <Link to="/create">
        <button className="Create" type="submit">Create activity</button>
        </Link>
        <Link to = "/home">
        <button className="Home" type="submit">Home</button>
        </Link>
        
    </div>
    )
     
}