//import Loading from './Loading/Loading'
import React, { useState, useEffect } from 'react'
//import {useParams} from 'react-router-dom'
import axios from "axios"
//import App from '../App'



//import loading and change the loading calulated width once you have metric for it
export default function Cities(props) {
  const [cityLight, setCityLight] = useState([])
  const [cities, setCities] = useState('')

  //const params = useParams()
  
  useEffect(() => {
    const apiCityCall = async () => {
      const response = await axios.get(
        `https://sunlightbycities-api.herokuapp.com/sunlight/`
      );
      setCityLight(response.data);
    };
    apiCityCall();
  }, []);

  console.log(cityLight)

  //i'll need to map thru the dataset and make a conditional that only sets cities if equals the name to a city in the array
  const handleCities = (event) => {
    event.preventDefault();
    if (event.target.id === "cities") {
      setCities(event.target.value)
    }
  }

  const filtering = cityLight.filter((city) => {
    if (city.City === cities) 
    return city;
  })
  const handleSubmit = (event) => {
    event.preventDefault();
    }
  return (
    <>

    <form onSubmit={handleSubmit}>
       <h1>Enter a city!</h1>
        <input
          placeholder='type city name here :)'
          type="text"
          id="cities"
          onChange={handleCities}
          value={cities}
        /> 
              </form>
      <br />
      <br />
      <div>
        {filtering.map((city, index) => (
          <p
            key={index}>
            {city.City} <br />
            Total hours of sunlight: {city.Year}
          </p>
        ))}
      </div> 
      </>
  )
}