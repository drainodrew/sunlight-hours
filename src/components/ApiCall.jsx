import Loading from './Loading'
import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import axios from "axios"
import App from '../App'

//import loading and change the loading calulated width once you have metric for it
export default function Cities(props) {
  const [apiData, setApiData] = useState([])
  const [input, setInput] = useState('')

  const params = useParams()
  
  const apiCall = async () => {
    const data = await axios(`https://sunlightbycities-api.herokuapp.com/sunlight/${input}`)
    console.log(data)
    setApiData(data);
  }

  useEffect(() => {
    apiCall()
  }, [handleSubmit])

  const handleInput = (event) => {
    event.preventDefault();
    if (event.target.id === "props.id") {
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
          id="props"
          onChange={handleInput}
          value={input}
      />
      <h4>(spell it right, there's no grace for you here)</h4>
        <button type="submit">Submit</button>
    </form>
  )
}

  

  


