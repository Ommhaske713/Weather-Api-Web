import TextField from '@mui/material/TextField';
import './SearchBox.css';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY =process.env.REACT_APP_WEATHER_API;

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            let jsonResponse = await response.json();
            console.log(jsonResponse);

            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                temp_min: jsonResponse.main.temp_min,
                temp_max: jsonResponse.main.temp_max,
                feelsLike: jsonResponse.main.feels_like,
                humidity: jsonResponse.main.humidity,
                weather: jsonResponse.weather[0].description
            };
            console.log(result);
            return result;
        } catch (error) {
            throw error;
        }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        event.preventDefault();
        setError(false); // Reset the error state before making a new request
        console.log(city);
        setCity("");
        try {
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch (error) {
            setError(true);
        }
    };

    return (
        <div className='SearchBox'>
            <br />
            <form onSubmit={handleSubmit}>
                <TextField
                    id="City"
                    label="City name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br /> <br />
                <Button variant="contained" size="medium" type='submit'>
                    Search
                </Button>
                {error && <p style={{ color: "red" }}>No such place exist!</p>}
            </form>
        </div>
    );
}
