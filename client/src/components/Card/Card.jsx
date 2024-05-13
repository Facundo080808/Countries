//import React from 'react';
import "./cars.css";
import { Link } from 'react-router-dom';
//import Detail from '../../views/Detail/Detail';
const Card = ({country}) => {
  
  const faceFront = {
    backgroundImage: `url(${country.image_url})`,
    backgroundSize: 'cover',
    backgroundRepeat:"no-repeat",
    backgroundPosition: 'center',
    }
  return(
      <div className="card-main">
     <div className="card" >
         <div className="front"style={faceFront} >
          
          <h1 className='name'>{country.name}</h1>
        </div>
        <div className="back">
           <h1 >{country.name}</h1>
           <h4>Capital:{country.capital}</h4>
           <h4>{country.continent}</h4>
         <Link to={`/home/${country.id}`}><h1 className='Detail'>Detail</h1></Link>  
  
        </div>
     </div>
     </div>
     )
    }
    export default Card;
   
   



  
  