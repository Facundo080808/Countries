//import React from 'react';
import "./cars.css";
import { Link } from 'react-router-dom';
//import Detail from '../../views/Detail/Detail';
const Card = (props) => {
  const Name = props.country.name;
  const Capital = props.country.capital;
  const continent = props.country.continent;
  const id = props.country.id;

  const faceFront = {
    backgroundImage: `url(${props.country.image_url})`,
    backgroundSize: 'cover',
    backgroundRepeat:"no-repeat",
    backgroundPosition: 'center',
    }
  return(
      <main className="card-main">
            <section className="card" >
               <article className="frente"style={faceFront} >
                  <h1 className='name'>{Name}</h1>
              </article>
               <article className="atras">
                   <h1 >{Name}</h1>
                   <h4>Capital:{Capital}</h4>
                   <h4>{continent}</h4>
                    <Link to={`/home/${id}`}><h1 className='Detail'>Detail</h1></Link>  
              </article>
            </section>
     </main>
     )
    }
    export default Card;
   
   



  
  