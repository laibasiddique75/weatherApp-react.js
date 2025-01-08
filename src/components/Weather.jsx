// import React, { useEffect ,useState ,useRef } from 'react';
// import './Weather.css';
// import search_icon from '../assets/search.png';
// import cloud_icon from '../assets/cloud.png';
// import clear_icon from '../assets/clear.png';
// import drizzle_icon from '../assets/drizzle.png';
// import humidity_icon from '../assets/humidity.png';
// import rain_icon from '../assets/rain.png';
// import snow_icon from '../assets/snow.png';
// import wind_icon from '../assets/wind.png';
// const Weather = () => {

//     const inputRef = useRef()
//     const [weather, setWeather] = useState(false);
//     const allIcons ={
//         '01d' : clear_icon,
//         "01n":clear_icon,
//         "02d":cloud_icon,
//         "02n":cloud_icon,
//         "03d":cloud_icon,
//         "03n":cloud_icon,
//         "04d":drizzle_icon,
//         "04n":drizzle_icon,
//         "09d":rain_icon,
//         "09n":rain_icon,
//         "10d":rain_icon,
//         "10n":rain_icon,
//         "13d":snow_icon,
//         "13n":snow_icon,
//     }

// const search = async (city) =>{
//     if(city === ""){
// alert("Enter City Name");
// return;
//     }
//     try{



// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

// const response = await fetch(url);
// const data = await response.json();

// if(!response.ok){
//     alert(data.message);
//     return;
// }

// console.log(data);

// const icon = allIcons[data.weather[0].icon] || clear_icon;

// setWeather({
//   humidity:data.main.humidity,
//   windSpeed:data.wind.speed,
//   temperature:Math.floor(data.main.temp),
//   location:data.name,
//   icon:icon
// })

//     }catch(error){
//   setWeather(false);
// console.error("Error in fetching weather data");

//     }
// }

// useEffect(() =>{
// search("London")
// },[])


//   return (
//     <div className='weather'>
//  <div className="search-bar">
//     <input ref={inputRef} type="text" placeholder="Search for a city"/>
//     <img src={search_icon} alt=''onClick={() =>search(inputRef.current.value)} />
//  </div>
//  {weather? <>
//     <img src={weather.icon} alt='' className='weather_icon' />
//  <p className='temperature'>{weather.temperature}°c</p>
//  <p className='location'>{weather.location}</p>
//  <div className="weather-data">
//     <div className="col">
//         <img src={humidity_icon} alt='' />
//         <div>
//             <p>{weather.humidity} %</p>
//             <span>Humidity</span>
//         </div>
//     </div>

//     <div className="col">
//         <img src={wind_icon} alt='' />
//         <div>
//             <p>{weather.windSpeed} km/h</p>
//             <span>Wind Speed</span>
//         </div>
//     </div>



//  </div>

//  </>:<></>}


//     </div>
//   )
// }

// export default Weather;




import React, { useEffect, useState, useRef } from "react";
import search_icon from "../assets/search.png";
import cloud_icon from "../assets/cloud.png";
import clear_icon from "../assets/clear.png";
import drizzle_icon from "../assets/drizzle.png";
import humidity_icon from "../assets/humidity.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";
import './Weather.css';

const Weather = () => {
  const inputRef = useRef();
  const [weather, setWeather] = useState(false);

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  const search = async (city) => {
    if (city === "") {
      alert("Enter City Name");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      const icon = allIcons[data.weather[0].icon] || clear_icon;

      setWeather({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      setWeather(false);
      console.error("Error in fetching weather data");
    }
  };

  useEffect(() => {
    search("London");
  }, []);

  return (
    <div className="weather min-h-screen flex flex-col items-center justify-center bg-blue-100 px-4 py-8 md:px-8">
      {/* Search Bar */}
      <div className="search-bar flex items-center space-x-3 w-full max-w-md mb-8">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search for a city"
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <img
          src={search_icon}
          alt="Search"
          className="w-10 h-10 cursor-pointer"
          onClick={() => search(inputRef.current.value)}
        />
      </div>

      {/* Weather Display */}
      {weather ? (
        <>
          <img
            src={weather.icon}
            alt="Weather Icon"
            className="weather_icon w-32 h-32 mb-6"
          />
          <p className="temperature text-6xl font-bold text-blue-700 mb-2">
            {weather.temperature}°c
          </p>
          <p className="location text-2xl font-semibold text-gray-700 mb-8">
            {weather.location}
          </p>
          <div className="weather-data grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-lg">
        

{/* Humidity */}
<div className="col flex items-center bg-yellow-500 p-4 rounded-lg shadow-sm transition-transform transform hover:scale-105">
  <img src={humidity_icon} alt="Humidity" className="w-12 h-12 sm:w-10 sm:h-10" />
  <div>
    <p className="text-lg font-semibold text-gray-800">{weather.humidity} %</p>
    <span className="text-sm ">Humidity</span>
  </div>
</div>

{/* Wind Speed */}
<div className="col flex items-center bg-yellow-500 p-4 rounded-lg shadow-sm transition-transform transform hover:scale-105">
  <img src={wind_icon} alt="Wind Speed" className="w-12 h-12 sm:w-10 sm:h-10" />
  <div>
    <p className="text-lg font-semibold text-gray-800">{weather.windSpeed} km/h</p>
    <span className="text-sm">Wind Speed</span>
  </div>
</div>



            
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Weather;
