import "../Detail/Detail.css"
import NavBar from "../../components/NavBar/NavBar.jsx"
import { useParams } from "react-router-dom"
import { useState ,useEffect } from "react"
import axios from "axios";
const Detail = () => {
  const {id} = useParams();
  const [idDetail , setIdDetail] = useState(null)
  const duracion = "Duracion : ";
  //console.log(id);
    useEffect(()=>{
        
        const fetchCountry = async()=>{
            try {
                const response = await axios.get(`http://localhost:3005/countries/${id}`)
                console.log(response.data)
               return setIdDetail(response.data)
            } catch (error) {
                console.error('algo fallo vro', error);
            }
        }
        fetchCountry();
    },[id]);
    if (!idDetail) {
       return<div>...loading</div>
    }
       
    
    return(
        <main className="mainDetail">
            <nav className="NavDetail"><NavBar/></nav>
            <section className="sectionDetails">
                <section className="sectionDiv">
                    <article className="titleImg">
                    <figure className="figureContainer"><img src={idDetail.image_url}className="countryImg"/></figure>
                     <h2 className="title">{idDetail.name}</h2>
                    </article>
                        
                    <article className="countryDetails">
                        <h2>{idDetail.id}</h2>
                        <h2>{idDetail.continent}</h2>  
                        <h2>{idDetail.capital}</h2>
                        <h3>{idDetail.subregion}</h3>
                        <h3>{idDetail.area}</h3>
                        <h3>{idDetail.population}</h3>
                    </article>
                
                </section>
                <aside className="asideDetails">
                    <h1 className="title">
                        {idDetail.activities[0] ? "Actividades" : "Aun no tienes actividades en este pais , Crealas!"}
                    </h1>
                    <h2>{idDetail.activities[0] && "Nombre : " + idDetail.activities[0].name}</h2>
                    <h2> {idDetail.activities[0] && "Dificultad : " + idDetail.activities[0].dificulty}</h2>
                    <h2>{idDetail.activities[0] && idDetail.activities[0].duration && "Duracion : " + idDetail.activities[0].duration + "Hs"}</h2>
                    <h2>{idDetail.activities[0] && "Estacion : " + idDetail.activities[0].season}</h2>
                    <h2></h2>
                </aside>
            </section>
                
        </main>
        )
}

export default Detail
        // const[country ,setCountry] = useState({});
        //const {id} = useParams();
       // useEffect(()=>{
         //   const getDetail = async () => {
           //     try {
             //       const responde = (await axios.get(`http://localhost:3005/countries/${id}`));
               //     const data = responde.data;
                //    console.log(data);
               //     if (data.name) {
                 //       setCountry(data);   
                //    }
                //    else{
                 //       alert("No se encontro el pais")
                  //  }
               // } catch (error) {
             //       console.error('Error al obtener los datos del personaje:', error);
             //       window.alert('Error al obtener los datos del personaje');
             //   }
            //}
            //getDetail();
                
           // return ()=>{
           //     setCountry({});
            
            //}
            //},[id])
                