import './App.css';
import Clima from './Components/Clima';
import Transito from './Components/Transito';
import { useEffect, useState } from 'react';

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
    temp: weatherData ? weatherData.current.temperature_2m : null,
    day: weatherData ? weatherData.current.time.split("T")[0] : null,
    time: weatherData ? weatherData.current.time.split("T")[1] : null,
    weatherCode: weatherData ? weatherData.current.weathercode : null,
  };
  
  const maxMinT = {
    maxT: weatherData ? weatherData.daily.temperature_2m_max : null,
    minT: weatherData ? weatherData.daily.temperature_2m_min : null,
  };
  
  const highlightValues = {
    tempHour: weatherData ? weatherData.hourly.temperature_2m.filter((value, index) => [0, 3, 6, 9, 12, 15, 18, 21, 23].includes(index)) : [],
    wind: weatherData ? weatherData.current.windspeed_10m : null,
    uvIndex: weatherData ? weatherData.daily.uv_index_max : null,
    humidity: weatherData ? weatherData.current.relativehumidity_2m : null,
    pressure: weatherData ? weatherData.current.pressure_msl : null,
    precipitation: weatherData ? weatherData.current.precipitation : null,
    visibility: weatherData ? (weatherData.hourly.visibility[0] / 1000).toFixed(2) : null,
    windDirection: weatherData ? weatherData.current.winddirection_10m : null,
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
            <Transito />
          </div>
        </div>
        ) : (
          loading && <h1>Cargando...</h1>
        )}
    </div>
  );
}

export default App;
