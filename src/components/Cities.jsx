import Loading from './Loading'
import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import axios from "axios"
import App from '../App'

//import loading and change the loading calulated width once you have metric for it
export default function Cities(props) {
  const [cityLight, setCityLight] = useState([])
  const [cities, setCities] = useState('')

  const params = useParams()
  
  const apiCityCall = async () => {
    const data = await axios(`https://sunlightbycities-api.herokuapp.com/sunlight/${params}`)
    console.log(data)
    setCityLight(data);
  }

  useEffect(() => {
    apiCityCall()
  }, [])

  //i'll need to map thru the dataset and make a conditional that only sets cities if equals the name to a city in the array
  const handleCities = (event) => {
    event.preventDefault();
    if (event.target.id === "cities") {
      setCities(event.target.value)
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    params = cities;

  }
  return (
    <form onSubmit={handleSubmit}>
       <h1>Enter a city!</h1>
        <input
          type="text"
          id="cities"
          onChange={handleCities}
          value={cities}
      />
      <h4>(spell it right, there's no grace for you here)</h4>
        <button type="submit">Submit</button>
    </form>
  )
}

  

  


