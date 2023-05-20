import React, { useState } from 'react'

function HomePage() {
  const [city, setCity] = useState('')
  console.log(city)
  const [weatherdata, setWeatherdata] = useState([])
  
  const fetchWD =(ev)=>{
    if(ev.key === 'Enter'){
      console.log('fetchingData')
        const apiKey = '7ee07080c74902df27aa022c3d34b291'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        fetch(url)
        .then(response => response.json())
        .then(data => {setWeatherdata(data)
        console.log(data)})
        
        }
      }

  return (
    <>
    <div className='MainContainer'>
        <div className='inputContainer'>
            <input type='text' placeholder='Enter City Name' value={city} onChange={(e)=>setCity(e.target.value)} onKeyPress={fetchWD}></input>
        </div>
        <div className='displayContainer'>
          {weatherdata.cod === 200 ? (
          <div>
          <div>{weatherdata.name} {weatherdata.sys.country}</div>
          <div>Temp. {Math.round(weatherdata.main.temp)}°C</div>
          <div>{weatherdata.weather[0].description}</div>
          <div>Humidity {weatherdata.main.humidity}</div>
          <div>{weatherdata.weather[0].icon}</div>
          </div>
          ):(
            <div></div>
          )}
          {weatherdata.cod === '404' ? (
            <div>{weatherdata.message}</div>
          ):(
            <div></div>
          ) }
          {console.log(weatherdata.cod)}
        </div>
    </div>
    </>
  )
}

export default HomePage