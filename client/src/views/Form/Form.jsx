import React from 'react'
import "../Form/Form.css"
import { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
const create = () => {
const [activity, setActivity] = useState({
    name: "",
    dificulty: "",
    duration: "",
    season: "",
})
const [error, setError] = useState({
    name: "obligatorio",
    dificulty: "obligatorio",
    duration: "",
    season: "obligatorio",
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
   const { name, value } = event.target;

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
    
}
const handleChangeSelect = ()=>{
    setError((prevState)=>{
       return{ ...prevState,
        season:""}
    })
}


return(
    <main className='maincreate'>
        <div className='NavBarform'><NavBar/></div>
        <section className='secionform'>
        
        <h1 className='h1form'>Aqui crearas tu actividad</h1>
        <form className='formcreate' >
        <div className='divsform'>
             <label><h2>Nombre</h2>
                <input className="inputform" type="text" placeholder="Nombre de tu actividad" value= {activity.value} name='name' onChange={handleChange} />
                <span><h2>{error.name}</h2></span>
                </label>
        </div>
        <div className='divsform'>
            <label ><h2>Dificultad</h2> :
                 <input className="inputform" type="text" placeholder="Dificultad" value= {activity.value} name='dificulty' onChange={handleChange}  />
                 <span><h2>{error.dificulty}</h2></span>
            </label>
            </div>
            <div className='divsform'>
            <label ><h2>Duración</h2>
             <input className="inputform" type="text" placeholder="Duración" value= {activity.value} name ='duration' onChange={handleChange}/>
             <span><h2>{error.duration}</h2></span>
             </label>
        </div>
        <div className='divsform'>
            <label><h2>Temporada</h2>
            <select className="inputform" name='season' onChange={handleChangeSelect} >
                <option ><h1>Summer</h1></option>
                <option >Autumn</option>
                <option >Winter</option>
                <option >Spring</option>
            </select>
            <span><h2>{error.season}</h2></span>
            </label>
        </div>
        </form>
           
     { !error.name && !error.dificulty && !error.season && <button className='buttonform'><h1 className="send">Create</h1></button>}      
        </section>
    </main>
)

}

export default create




//const handleChangeForm = (event) => {
  //  setActivity(prevState => {
    //    return {
      //      ...prevState,
      //      [event.target.name]: event.target.value
       // }
//    })
 //   Validate({
 //       ...activity,
  //      [event.target.name]: event.target.value
   // })
//}