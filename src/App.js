import './App.css';
import TempActual from './Components/TempActual';
import MaxTemp from './Components/MaxTemp';
import HourlyTemp from './Components/HourlyTemp';
import WindHighlight from './Components/WindHighlight';
import UVIndexHighlight from './Components/UVIndexHighlight';
import PressureHighlight from './Components/PressureHighlight';
import HumidityHighlight from './Components/HumidityHighlight';
import VisibilityHighlight from './Components/VisibilityHighlight';
import PrecipitationHighlight from './Components/PrecipitationHighlight';
import MinTemp from './Components/MinTemp';
import dataWeather from './dataWeather.json'
import { useState } from 'react';

function App() {
  const [dailyTemp, setDailyTemp] = useState({
    temp: dataWeather.current_weather.temperature,
    day: 'Lunes',
    time: '17:00',
    weatherCode: dataWeather.current_weather.weathercode,
  })

  const [maxMinT, setMaxMinT] = useState({
    maxT: dataWeather.daily.temperature_2m_max[0],
    minT: dataWeather.daily.temperature_2m_min[0]
  });

  const [highlightValues, setHighlightValues] = useState({
    wind: dataWeather.current_weather.windspeed,
    uvIndex: dataWeather.daily.uv_index_max,
    humidity: dataWeather.hourly.relativehumidity_2m[0],
    pressure: dataWeather.hourly.pressure_msl[0],
    precipitation: dataWeather.hourly.precipitation_probability[0],
    visibility: (dataWeather.hourly.visibility[0] / 1000).toFixed(2),
  })

  return (
    <div className="Clima">
      <div className="Main">
        <div className="temp-actual">
          <TempActual temp={dailyTemp.temp} day={dailyTemp.day} time={dailyTemp.time} weathercode={dailyTemp.weatherCode} />
        </div>
        <div className="max-min">
          <MaxTemp max={maxMinT.maxT} />
          <MinTemp min={maxMinT.minT} />
        </div>
      </div>
      <div className="container-extra">
        <div className="por-hora">
          <HourlyTemp />
        </div>
        <>
          <h2 className='highlight-header'>Destacados</h2>
          <div className='container-highlights'>
            <UVIndexHighlight uvIndex={highlightValues.uvIndex} />
            <WindHighlight wind={highlightValues.wind} />
            <PressureHighlight pressure={highlightValues.pressure} />
            <HumidityHighlight humidity={highlightValues.humidity} />
            <VisibilityHighlight visibility={highlightValues.visibility} />
            <PrecipitationHighlight precipitation={highlightValues.precipitation} />
          </div>  
        </>
      </div>
    </div>
  );
}

export default App;
