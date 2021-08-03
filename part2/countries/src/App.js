import React, {useEffect, useState} from "react"
import axios from 'axios'
import View from './View'

const App = () =>{

    const [countries,setCountries] = useState([])

    const [search,setSearch] = useState('')

    const handleSearch = (event) =>{
        const value = event.target.value;
        setSearch(value)
    }

    useEffect(() => {
        console.log('effect')
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                console.log('promise fulfilled')
                setCountries(response.data)
                console.log(setCountries(response.data));
            })
    }, [])

    function Display(props){
        let filterCopy = props.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
        let filter = JSON.parse(JSON.stringify(filterCopy));
        if(filter.length >10){
            return(<div>Too many matches, specify another filter</div>)
        }
        else if(filter.length >1 && filter.length <=10) {
            return (
                filter.map((filtered,index) =>
                    <div key={index}>
                        {filtered.name}<button onClick={()=>Display1(filter,filtered)}>show</button>
                        {filtered.isShow&&(<View key={index} view={filtered}/>)}
                    </div>
                        )
            
            )
        }
        else if(filter.length ===1){
            return(
                filter.map(filtered =>
                    <View view={filtered}/>
                )
            )
        }
    }
    function Display1(filter,country){

        country.isShow = !country.isShow;
        setCountries(filter);
    }

    return(

        <div>find countries
            <input onChange={handleSearch}/>
            <p></p>
            {Display(countries)}
        </div>
    )

}

export default App;
