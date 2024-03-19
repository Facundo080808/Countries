import Card from "../Card/Card"
import "./Cards.css"

const Cards = ({allCountries}) => {
    const countries = allCountries ;
    return (
        
            <div className="cards"> {countries && countries.map((country) => <Card className="card" country={country}/>) } </div>
             
        
    )
}

export default Cards