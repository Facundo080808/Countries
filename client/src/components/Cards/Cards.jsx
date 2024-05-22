import Card from "../Card/Card"
import "./Cards.css"
import { useSelector } from "react-redux"
const Cards = ({allCountries}) => {
    
    const countries = allCountries 
    return (
            <section className="cards"> {countries ? countries.map((country) => <Card className="card" country={country}/>): <h1>loading</h1> } </section>
    )
}

export default Cards