import './App.css';
import Clima from './Components/Clima';
import Transport from './Components/Transporte Componentes/Transport';
import Loading from './Components/Loading';
import { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';

function App() {
  // API, Datos y filtrados de Clima.
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [backgroundClass, setBackgroundClass] = useState('background-day');
  const [locationQuery, setLocationQuery] = useState('Córdoba');
  const [timezone, setTimezone] = useState('America/Sao_Paulo');
  const [selectedLocation, setSelectedLocation] = useState("");
  const [locationError, setLocationError] = useState(null);

  const fetchWeatherData = (query) => {
    setLocationError(null);

    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=1&language=es&format=json`)
      .then((response) => response.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          const { latitude, longitude, timezone } = data.results[0];
          setTimezone(timezone);
          fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relativehumidity_2m,is_day,precipitation,weathercode,pressure_msl,windspeed_10m,winddirection_10m&hourly=temperature_2m,visibility,precipitation_probability&daily=weathercode,temperature_2m_max,temperature_2m_min,uv_index_max&timezone=${timezone}&forecast_days=1`)
            .then((resp) => resp.json())
            .then((weatherData) => {
              setSelectedLocation(data.results[0]);
              setWeatherData(weatherData);
              setLoading(false);
            })
            .catch((ex) => {
              console.error(ex);
              setLoading(false);
            });
        } else {
          console.error('Localidad no encontrada');
          setLoading(false);
          setLocationError('La ubicación no se encontró. Por favor, verifica el nombre de la ciudad.')
        }
      })
      .catch((ex) => {
        console.error(ex);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchWeatherData(locationQuery);
  }, [locationQuery]);

  useEffect(() => {
    if (weatherData && weatherData.current && weatherData.current.is_day === 0) {
      setBackgroundClass('background-night');
    } else {
      setBackgroundClass('background-day');
    }
  }, [weatherData]);

  const dailyTemp = {
    temp: weatherData?.current.temperature_2m || null,
    time: weatherData?.current.time.split("T")[1] || null,
    weatherCode: weatherData ? weatherData.current.weathercode : null,
    formattedTime: null,
    isDay: weatherData?.current.is_day || null,
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
    precipitation: weatherData?.hourly.precipitation_probability || null,
    visibility: (weatherData?.hourly.visibility[0] / 1000).toFixed(2) || null,
    windDirection: weatherData?.current.winddirection_10m || null,
  };

  // API, Datos y filtrado de Colectivos
  const [selectedLine, setSelectedLine] = useState('');
  const [transportData, setTransportData] = useState(null);

  const abortControllerRef = useRef(null);

  useEffect(() => {
    const fetchDataPeriodically = () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      const newController = new AbortController();
      abortControllerRef.current = newController;

      const apiTransportUrl = `https://datosabiertos-transporte-apis.buenosaires.gob.ar:443/colectivos/vehiclePositionsSimple?route_id=${selectedLine}&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6`;

      const fetchData = () => {
        fetch(apiTransportUrl, { signal: newController.signal })
          .then((resp) => resp.json())
          .then((data) => {
            setTransportData(data);
          })
          .catch((ex) => {
            if (ex.name === "AbortError") {
              console.log(ex);
            } else {
              console.log(ex);
            }
          });
      };

      fetchData();
      const interval = setInterval(() => {
        fetchData();
      }, 31000);

      return () => {
        clearInterval(interval);
        if (abortControllerRef.current) {
          abortControllerRef.current.abort();
        }
      };
    };

    fetchDataPeriodically();
  }, [selectedLine]);

  return (
    <div className={`App ${backgroundClass}`}>
      {weatherData ? (
        <div className='container'>
          <Clima
            locationError={locationError}
            locationQuery={locationQuery}
            setLocationQuery={setLocationQuery}
            selectedLocation={selectedLocation}
            dailyTemp={dailyTemp}
            maxMinT={maxMinT}
            highlightValues={highlightValues}
          />
          <div className='half-width'>
            <Transport
              transportData={transportData}
              selectedLine={selectedLine}
              setSelectedLine={setSelectedLine}
            />
          </div>
        </div>
      ) : (
        loading && <Loading />
      )}
    </div>
  );
}

export default App;
