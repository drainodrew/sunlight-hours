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
  console.log(typeof cityLight)

  //i'll need to map thru the dataset and make a conditional that only sets cities if equals the name to a city in the array
  const handleCities = (event) => {
    event.preventDefault();
    if (event.target.id === "cities") {
      setCities(event.target.value)
    }
  }
  const handleMatch = (e) => {
    e.preventDefault();

  }
  const handleSubmit = (event) => {
    event.preventDefault();
    }
   
  return (
    <>
    <form onSubmit={handleSubmit}>
       <h1>Enter a city!</h1>
        <input
          type="text"
          id="cities"
          onChange={handleCities}
          value={cities}
        /> 
        {cityLight.map((city, index) => (
          <p
            key={index}
            onChange={handleMatch}
            className={city.City === cities}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
      <br />
      <br />
      <section>
      
      
     </section>   
      </>
  )
}

  

  


