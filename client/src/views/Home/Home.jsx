import "../Home/Home.css"
import { useEffect , useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import Cards from "../../components/Cards/Cards.jsx"
import NavBar from "../../components/NavBar/NavBar.jsx"
import Filter from "../../components/filters/filter.jsx"
import {getCountries} from "../../redux/actions/indexActions.js"

///////////////////////////////////////////////////////////////////////////
const Home = () => {
    const dispatch = useDispatch();
    const countryNm = useSelector((state)=> state.countries.filtredCountries)
    const allCountries = useSelector((state) => state.countries.countries);
    
    const [countryFilter , setCountryFilter] = useState(countryNm);
    const [search , setSearch] = useState("");
    const handleChange = (event) =>{    
        event.preventDefault();
        setSearch(event.target.value.toLowerCase());
    }
    const handleSubmit = (event) =>{
            event.preventDefault();
           const country = allCountries.filter((element) => element.name.toLowerCase().includes(search));   
           setCountryFilter(country);  
    }
    const AZ =(event)=>{
        event.preventDefault();
        const countriesAZ = [...allCountries].sort((a,b)=>{
            return a.name.localeCompare(b.name)
        })
        setCountryFilter(countriesAZ)
    }

    const ZA =(event)=>{
        event.preventDefault();
        const countriesAZ = [...allCountries].sort((a,b)=>{
            return b.name.localeCompare(a.name)
        })
        setCountryFilter(countriesAZ)
    }
    const clearFilters = (event)=>{
        event.preventDefault();
        const countries = [...allCountries];
        setCountryFilter(countries)
    }

useEffect(() => {
    dispatch(getCountries());

    
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
                <li> <Filter handleSubmit={handleSubmit} handleChange={handleChange} Z__A={ZA} A__Z={AZ} clear={clearFilters} /> </li>    
            </ol>
        </nav> 
        
        <div className="divCards"><Cards allCountries={countryFilter}/></div>
            
        </div>
       
    </section> 
)


}
export default Home;