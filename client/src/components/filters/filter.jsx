import React from "react";
import { useState } from "react";
import "../filters/filter.css";
export default function Filter({handleSubmit , handleChange , Z__A,A__Z, clear}) {
    


    return <div  className="filterDiv">
            <button className="clearFilter" onClick={clear}><h4>Clear Filter</h4></button>
             <form onChange={handleChange} className="form">
                    <div className="searchDiv">
                         <input className="input" placeholder=" count..."  />
                         <button type="submit" onClick={handleSubmit} className="search"></button>
                    </div>
                     <div>
                    
                    <button onClick={A__Z} className="clearFilter">A-Z</button>
                    <button onClick={Z__A} className="clearFilter">Z-A</button>
                    </div>
                    <div>
                    <h4>By Popularity</h4>
                    <select>
                        <option value="None" selected>None</option>
                        <option value="Ascending">Ascending</option>
                        <option value="Descending">Descending</option>
                    </select>
                    </div>
                    <div>
                    <h4>By Activity</h4>
                <select>
                    <option value="None" selected>All</option>
                    <option value="Ascending">Ascending</option>
                    <option value="Descending">Descending</option>
                </select>
                    </div>

                    
             </form>
           </div>;
}