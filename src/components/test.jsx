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
  
  
  console.log(testData.Year)
  let years = testData.map((city) => {
    console.log(typeof city.Year)
    return city.Year
  })
  //let cityNames = testData.map((city) => city.City)
  years.sort();
  console.log(years)
  // mvlet sortedHours = [{}];
  // cityNames.forEach((city, index) => {
  //   sortedHours[city] = years[index]
  // })

  // sortedHours.sort = (x, y) => {
  //     return x.salary - y.salary;
  // });

  // }
  // console.table(sortedHours)
  return (
    <>
      
        
      </>
  )
}
export default Test