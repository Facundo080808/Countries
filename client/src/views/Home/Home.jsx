import "../Home/Home.css"
import { useEffect , useState } from "react"
import { Link } from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import Cards from "../../components/Cards/Cards.jsx"
import NavBar from "../../components/NavBar/NavBar.jsx"
import Filter from "../../components/filters/filter.jsx"
import {getCountries , getCountriesByName} from "../../redux/actions/indexActions.js"
const Home = () => {
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries);
    const [countryFilter , setCountryFilter] = useState(allCountries);
    const [search , setSearch] = useState("");

    const handleChange = (event) =>{    
        event.preventDefault();
        setSearch(event.target.value.toLowerCase());
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        const country = search.trim()
        dispatch(getCountriesByName(country))
        //const country = allCountries.filter((element) => element.name.toLowerCase().includes(search));
        //setCountryFilter(country);
    }
//otra forma de hacerlo es borrando este useEffect y descomentando el codigo de arriba .
    useEffect(() => {
        setCountryFilter(allCountries);
    }, [allCountries]);

useEffect(() => {
    dispatch(getCountries());

    return (() => {
      //debeias hacer un clearDetail  
    
    })
},[dispatch])


return(
    <section className="bodyHome">
        <nav className="navBar">
            <ul>
                <li><NavBar/></li>  
            </ul>
        </nav>
        <div className="divCardsFilter">
        <nav className="filters">
            <ol>
                <li> <Filter handleSubmit={handleSubmit} handleChange={handleChange}/> </li>    
            </ol>
        </nav>
        <div className="divCards"><Cards allCountries={countryFilter}/></div>
            
        </div>
       
    </section> 
)


}
export default Home;