import SearchBox from './SearchBox'
import ContentBox from './ContentBox'
import { useState } from 'react'
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState(
        {
            city : "Pune",
            temp : 26.62,
            temp_min : 26.62,
            temp_max : 26.62,
            feelsLike: 27,
            humidity : 79,
            weather : "overcast cloud", 
            }
    );
   let updateInfo = (newInfo) =>{
    setWeatherInfo(newInfo);
   }

    return(
        <div style={{textAlign:"center"} }><h3>Weather App </h3>
        <SearchBox updateInfo={updateInfo}/>
        <ContentBox info={weatherInfo} />

        </div>
    )
}  
