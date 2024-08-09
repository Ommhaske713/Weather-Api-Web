import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './ContentBox.css'
import AcUnitIcon from '@mui/icons-material/AcUnit'; // cold
import ThunderstormIcon from '@mui/icons-material/Thunderstorm'; //rain
import LooksIcon from '@mui/icons-material/Looks';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function ContentBox({ info }) {

  const IMG_URl = "https://images.unsplash.com/photo-1685213202120-1cd90f8ee08e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG92ZXJjYXN0JTIwY2xvdWQlMjB3ZWF0aGVyfGVufDB8fDB8fHww"

  const RAINWEATHER_URL = "https://i.imgur.com/LtKmmY3.jpeg";
  const COLDWEATHER_URL = "https://i.imgur.com/NGyCi03.jpeg";
  const HOTWEATHER_URL = "https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.jpg?s=1024x1024&w=is&k=20&c=P68MuQDaXK7NM55yd1ivyrW7NZ2CokCNSfDcXe8BdH0=";
  
  
  return (
    <div className="ContentBox">
      <div className='card'>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 75 ? RAINWEATHER_URL : info.temperature > 25 ? HOTWEATHER_URL : COLDWEATHER_URL}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {info.humidity > 75 ? <ThunderstormIcon/> : info.temperature > 25 ? <WbSunnyIcon/> : <AcUnitIcon/>}
            </Typography>
            <Typography variant="body2" color="text.secondary" component={"span"}>
              <p>Weather feels like {info.feelsLike}&deg;C</p>
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Minimum Temperature = {info.temp_min}&deg;C</p>
              <p>Maximum Temperature = {info.temp_max}&deg;C</p>
              <i>Weather can be described as <b>{info.weather}</b></i>

            </Typography>
          </CardContent>

        </Card>
      </div>
    </div>

  );
}