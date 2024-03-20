import React from 'react';
import "./cars.css";
import { Link } from 'react-router-dom';
import Detail from '../../views/Detail/Detail';
const Card = ({country}) => {
  
  const faceFront = {
    backgroundImage: `url(${country.flag})`,
    backgroundSize: 'cover',
    backgroundRepeat:"no-repeat",
    backgroundPosition: 'center',
    }
  return(
      <div className="card-main">
     <div className="card" >
         <div className="front"style={faceFront} >
          
          <h1 className='name'>{country.nativeName}</h1>
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
   //aqui va el invento
   // position:"absolute",
    //width:"100%",
    //height:"100%",
    //backfaceVisibility:"hidden",
    //borderRadius:"10px",
    //overFlow:"hidden",
    //transition: ".5s",
    //Transform:"perspective(600px) rotateY(0deg)",
    //position:"relative",
    
  //}
  //const card = {
    //display:"flex",
    //flexDirection:"column",
    
    //position:"relative",
    //width:"10em",
    //background:"red",
    
  //} 
  //const h3 = {

    //position:"absolute",
    //bottom:"0",
    //color:"white",
    //width:"100%",
    //height:"30%",
    //lineHeight:"50px",
    //textAlign:"center",
    //backgroundColor:"rgba(0, 0, 0, 0.5)",

  //}
   



  
  