//import Loading from './Loading/Loading'
import React, { useState, useEffect } from 'react'
//import {useParams} from 'react-router-dom'
import axios from "axios"
//import App from '../App'


//import loading and change the loading calulated width once you have metric for it
let List = (props) => {
  const [listData, setListData] = useState([])
  
  useEffect(() => {
    const apiCityCall = async () => {
      const response = await axios.get(
        `https://sunlightbycities-api.herokuapp.com/sunlight/`
      );
      setListData(response.data);
    };
    apiCityCall();
  }, []);

  let listSort = listData.map((element) => {
    return element.City
  })
  listSort.sort();
console.log(listSort)
  return (
    <div className="city-list">
      {listSort.map((element, index) => (
        <p
          key={index}>
          {element}
        </p>
      ))}
    </div>
  )
}

export default List