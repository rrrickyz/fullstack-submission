import axios from 'axios'
import { useEffect, useState } from 'react'

const Weather = (props) =>{
    const {city} = props
    const [data,setData] = useState([])
    const url = `http://api.weatherstack.com/current?access_key=ee83011a2dee3d9cb6cfb515c4b17b43&query=${city}`
 

    useEffect(() =>{
    axios.get(url)
            .then(response => {
                console.log('promise fulfilled')
                setData(response.data.current)})

            },[])
    console.log(data)


    return(
        <div>
            <h2>Weather in {city}</h2>
            <p><b>temperature: </b> {data.temperature} Celsius </p>
            <img src={data.weather_icons} width="50" height="60" alt="icon"/>
            <p><b>wind: </b> {data.wind_speed} mph direction {data.wind_dir}</p>
        </div>
    )
}

export default Weather;

export default Weather;