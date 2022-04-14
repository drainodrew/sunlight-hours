import axios from "axios"
import React, { useState, useEffect } from 'react'


function Home() {
  const [dataList, setDataList] = useState([])

  const apiCall = async () => {
    const data = await axios(`https://sunlightbycities-api.herokuapp.com/sunlight/`)
    console.log(data)
    setDataList(data);
  }
console.log(dataList)
  useEffect(() => {
    apiCall()
  }, [])

  return (
    <>
      <h2 className="homeh2">Have you wondered how many hours of sunlight different cities get?</h2>
      <h3>Probably not. But now you have, and we've got the answers.</h3>
    
    </>
  )
}

export default Home;




