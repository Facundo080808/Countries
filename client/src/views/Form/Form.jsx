import axios from 'axios'
import "../Form/Form.css"
import { useState , useEffect } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { useDispatch } from 'react-redux';
import { postActivity } from '../../redux/actions/indexActions'

const create = () => {
    const dispatch = useDispatch();
const [option , setOption] = useState([])
const [activity, setActivity] = useState({
    name: "",
    dificulty: 0,
    duration: 0,
    season: "",
    country:""
})
const [error, setError] = useState({
    name: "obligatorio",
    dificulty: "obligatorio",
    duration: "",
    season: "elegir una de las opciones",
    country:"elegir uno de los paises"
})

const ValidateName= (input)=>{
    const regex = /^[a-zA-Z\s.'-]+$/

    if (regex.test(input)) {
        setError((prevState)=>{
            return{...prevState,name:""}
        })
    }else{
        setError((prevState)=>{
            return{...prevState,name:"FORMATO INVALIDO: solo letras"}
        })
        
    }
}
const ValidateDifficulty= (input)=>{
    const regex = /^[1-5]$/ ;
if (regex.test(input)) {
    setError((prevState)=>{
        return{...prevState,dificulty:""}
    })
}else{
    setError((prevState)=>{
        return{...prevState,dificulty:"FORMATO INVALIDO : numeros del 1 al 5"}
    })
}
}
const ValidateDuration = (input) =>{
    const regex = /^(?:[1-9]|1[0-9]|2[0-4])$/
    if (regex.test(input)) {
        setError((prevState)=>{
            return{
                ...prevState,
                duration:""
            }
        })
    }else{
        setError((prevState)=>{
            return{
                ...prevState,
                duration:"el formato debe ser en horas y no mayor a 24"
            }
        })
    }
}
const handleChange = (event) => {
   const { name, value , options} = event.target;
  setActivity(prevState => ({
        ...prevState,
        [name]: value
    }));
    if (name === "name") {
      return  ValidateName(value);    
    }
    else if (name === "dificulty") {
        return ValidateDifficulty(value)
    }
    else if (name ==="duration") {
        return ValidateDuration(value)
    }
    else if (name === "season") {
        return ValidateName(value)
    }
    else if(name ==="country"){
        return ValidateName(value)
    }
    
}
const handleChangeSelect = (event)=>{
    const {name , value, options} = event.target;
    
    const selectedSeason = Array.from(options).filter((element) => element.select).map((element)=>element.value);
    setActivity(prevState =>{
       return{...prevState, [name]: selectedSeason} 
    })
    setError((prevState)=>{
       return{ ...prevState,
        season:""}
    })
}

const handleChangeCountry = (e)=>{
    const {name , value, options} = e.target;
    const selectedCountry = Array.from(options).filter((element)=>element.selected).map((element)=>element.value);
    setActivity(prevState =>{
       return{...prevState,[name]: selectedCountry} 
    })
    setError((prevState)=>{
        return{...prevState,country:""}
    })
}
useEffect(()=>{
    const selectCountries =async () =>{
        try {
            const response = await axios.get("http://localhost:3005/countries");
            const data = response.data;
            const names = data.map(element => element.name);
            setOption(names);
        } catch (error) {
            console.error(error.message);
        }
    }
selectCountries()
},[])

const handleSubmit =async (e) =>{
e.preventDefault();
const dataToSend = {
    name:activity.name,
    dificulty:activity.dificulty,
    duration:activity.duration,
    season: activity.season,
    country:activity.country
}
dispatch(postActivity(dataToSend));
}
return(
    <main className='maincreate'>
        <div className='NavBarform'><NavBar/></div>
        <section className='secionform'>
        
        <h1 className='h1form'>Aqui crearas tu actividad</h1>
        <form className='formcreate' onSubmit={handleSubmit}>
        <div className='divsform'>
             <label className='name'><h2>Nombre</h2>
                <input autoComplete="given-name" className="inputform" type="text" placeholder="Nombre de tu actividad" value= {activity.value} name='name' onChange={handleChange} />
                <span><h2>{error.name}</h2></span>
                </label>
        </div>
        <div className='divsform'>
            <label htmlFor='dificulty' ><h2>Dificultad</h2> :
                 <input className="inputform" type="text" placeholder="Dificultad" value= {activity.value} name='dificulty' onChange={handleChange}  />
                 <span><h2>{error.dificulty}</h2></span>
            </label>
            </div>
            <div className='divsform'>
            <label htmlFor='duration'><h2>Duración</h2>
             <input className="inputform" type="text" placeholder="Duración" value= {activity.value} name ='duration' onChange={handleChange}/>
             <span><h2>{error.duration}</h2></span>
             </label>
        </div>
        <div className='divsform'>
            <label htmlFor='season'><h2>Temporada</h2>
            <input type="text" className='inputform' placeholder='Escribe una estacion del año' value={activity.season } name='season' onChange={handleChange} />
            {/*<select className="inputform" name='season' onChange={handleChangeSelect} >
                <option value="Summer">Summer</option>
                <option value="Autumn">Autumn</option>
                <option value="Winter">Winter</option>
                <option value="Spring">Spring</option>
            </select>*/}
            <span><h2>{error.season}</h2></span>
            </label>
        </div>
        <div className='divsform'>
            <label htmlFor='country'><h2>Pais de tu actividad</h2>
            <input type="text" className='inputform' placeholder='Escribe el pais donde se realizara tu actividad' value={activity.country} name='country' onChange={handleChange} />
           {/**  <select className='inputform' onChange={handleChangeCountry} id='countrys'>
               {option.map((name, index)=>(<option key={index}>{name}</option>))} 
            </select>*/}
            <span><h2>{error.country}</h2></span>
            </label>
            
        </div>
        </form>
           
     { !error.name && !error.dificulty && <button className='buttonform' onClick={handleSubmit}><h1 className="send">Create</h1></button>}      
        </section>
    </main>
)

}

export default create