import "../Detail/Detail.css"
import NavBar from "../../components/NavBar/NavBar.jsx"
import { useParams } from "react-router-dom"
import { useState ,useEffect } from "react"
import axios from "axios";
const Detail = () => {
  const {id} = useParams();
  const [idDetail , setIdDetail] = useState(null)
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
                    <figure className="figureContainer"><img src={idDetail[0].flag}className="countryImg"/></figure>
                     <h2 className="title">{idDetail[0].name}</h2>
                    </article>
                        
                    <article className="countryDetails">
                        <h2>{idDetail[0].id}</h2>
                        <h2>{idDetail[0].continent}</h2>  
                        <h2>{idDetail[0].capital}</h2>
                        <h3>{idDetail[0].subregion}</h3>
                        <h3>{idDetail[0].area}</h3>
                        <h3>{idDetail[0].population}</h3>
                    </article>
                
                </section>
                <aside className="asideDetails">
                    <h1 className="title">Activities</h1>
                    <h2>Nombre</h2>
                    <h2>Dificultad</h2>
                    <h2>Duracion</h2>
                    <h2>Temporada</h2>
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
                