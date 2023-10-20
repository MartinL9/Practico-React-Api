import './App.css';
import Clima from './Components/Clima';
import Transport from './Components/Transport';
import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.open-meteo.com/v1/forecast?latitude=-31.4135&longitude=-64.181&current=temperature_2m,relativehumidity_2m,precipitation,weathercode,pressure_msl,windspeed_10m,winddirection_10m&hourly=temperature_2m,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,uv_index_max&timezone=America%2FSao_Paulo&forecast_days=1')
      .then( resp => resp.json()
    ).then(data => {
      setWeatherData(data);
      setLoading(false);
    }).catch(ex => {
      console.error(ex);
    })
  }, [])

  const dailyTemp = {
    temp: weatherData?.current.temperature_2m || null,
    time: weatherData?.current.time.split("T")[1] || null,
    weatherCode: weatherData ? weatherData.current.weathercode : null,
    formattedTime: null,
  };

  if (weatherData?.current.time) {
    const date = new Date(weatherData.current.time);
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    dailyTemp.formattedTime = date.toLocaleDateString('es-ES', options);
  }

  const maxMinT = {
    maxT: weatherData?.daily.temperature_2m_max || null,
    minT: weatherData?.daily.temperature_2m_min || null,
  };
  
  const highlightValues = {
    tempHour: weatherData?.hourly.temperature_2m.filter((value, index) => [0, 3, 6, 9, 12, 15, 18, 21, 23].includes(index)) || [],
    wind: weatherData?.current.windspeed_10m || null,
    uvIndex: weatherData?.daily.uv_index_max || null,
    humidity: weatherData?.current.relativehumidity_2m || null,
    pressure: weatherData?.current.pressure_msl || null,
    precipitation: weatherData ? weatherData.current.precipitation : null,
    visibility: (weatherData?.hourly.visibility[0] / 1000).toFixed(2) || null,
    windDirection: weatherData?.current.winddirection_10m || null,
  };

  return (
    <div className="App">
      {weatherData ? (
        <div className='container'>
          <Clima
            dailyTemp={dailyTemp}
            maxMinT={maxMinT}
            highlightValues={highlightValues}
          />
          <div className='half-width'>
            <Transport />
          </div>
        </div>
        ) : (
          loading && <h1>Cargando...</h1>
        )}
    </div>
  );
}

export default App;
