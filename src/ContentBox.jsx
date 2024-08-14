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

  const RAINWEATHER_URL = "https://media.istockphoto.com/id/1254778015/photo/woman-crossing-street-downtown-in-rain.jpg?s=2048x2048&w=is&k=20&c=muPMsVPliaRCER22vk11y7iX7Wjrdn8e4_TeJLenumo=";
  const COLDWEATHER_URL = "https://media.istockphoto.com/id/1455396963/vector/woman-wearing-warm-clothes-during-winter-blister-vector-cartoon-illustration.jpg?s=2048x2048&w=is&k=20&c=sxSXV6YuZWjLiWMiw72Q-gQKTRYOBYtAkODHadqc170=";
  const HOTWEATHER_URL = "https://media.istockphoto.com/id/137199031/photo/sun-in-the-blue-sky-with-lensflare.jpg?s=1024x1024&w=is&k=20&c=L-shwSkT7Xb7rBTT962cCz0bWTEVXjp7ER2l7UlsBew=";
  
  
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