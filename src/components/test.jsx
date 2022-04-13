//import Loading from './Loading/Loading'
import React, { useState, useEffect } from 'react'
//import {useParams} from 'react-router-dom'
import axios from "axios"
//import App from '../App'


//import loading and change the loading calulated width once you have metric for it
let Test = (props) => {
  const [testData, setTestData] = useState([])
  
  useEffect(() => {
    const apiCityCall = async () => {
      const response = await axios.get(
        `https://sunlightbycities-api.herokuapp.com/sunlight/`
      );
      setTestData(response.data);
    };
    apiCityCall();
  }, []);
  
  const sorting = testData.filter((city) => {
    if (city.City === "Sofia")
      return city;
    return null;
  })
  return (
    <>
      <div>{sorting.map((city) => (
        <p>{city.City}
          </p>))}
      </div>

      </>
  )
}
export default Test