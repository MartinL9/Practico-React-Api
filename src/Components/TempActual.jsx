import styled from "styled-components";
import Thermometer from 'react-thermometer-component'
import { SymbolCelsius } from "../Styles/GlobalStyles";
import { 
    WiDaySunny, 
    WiDaySunnyOvercast, 
    WiFog, 
    WiSprinkle, 
    WiShowers,
    WiStormShowers, 
    WiRainMix, 
    WiRain, 
    WiSnow, 
    WiSnowWind,
    WiHail,
    WiThunderstorm
} from 'weather-icons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons';

function TempActual({ temp, day, time, isDay, selectedLocation, weathercode, locationQuery, setLocationQuery, locationError }) {
    const weatherIcons = {
        0: <WiDaySunny size={170} color="#FFD700"/>,
        1: <WiDaySunnyOvercast size={170} color="#FFD700" />,
        2: <WiDaySunnyOvercast size={170} color="#FFD700" />,
        3: <WiDaySunnyOvercast size={170} color="#FFD700" />,
        45: <WiFog size={170} color="#A2D3D9" />,
        48: <WiFog size={170} color="#A2D3D9" />,
        51: <WiSprinkle size={170} color="#A2D3D9" />,
        53: <WiShowers size={170} color="#74BEC8" />,
        55: <WiShowers size={170} color="#74BEC8" />,
        56: <WiRainMix size={170} color="#74BEC8" />,
        57: <WiRainMix size={170} color="#74BEC8" />,
        61: <WiRain size={170} color="#74BEC8" />,
        63: <WiRain size={170} color="#74BEC8" />,
        65: <WiRain size={170} color="#74BEC8" />,
        71: <WiSnow size={170} color="#A2D3D9" />,
        73: <WiSnow size={170} color="#A2D3D9" />,
        75: <WiSnowWind size={170} color="#A2D3D9" />,
        77: <WiHail size={170} color="#A2D3D9" />,
        80: <WiStormShowers size={170} color="#A0CFD9" />,
        81: <WiStormShowers size={170} color="#A0CFD9" />,
        82: <WiThunderstorm size={170} color="#A0CFD9" />,
        85: <WiSnow size={170} color="#A0CFD9" />,
        86: <WiSnowWind size={170} color="#A0CFD9" />,
    }

    const weatherIcon = weatherIcons[weathercode];

    return (
        <TempActualContainer>
            <TemperatureInfo>
                <IconTempAContainer>{weatherIcon}</IconTempAContainer>
                {locationError && <ErrorMessage>{locationError}</ErrorMessage>}
                <div>   
                    <TimeDay>
                        <IconInput icon={faMagnifyingGlassLocation} />
                        <input 
                            type="text" 
                            placeholder="Buscar lugar"
                            value={locationQuery}
                            onChange={(e) => setLocationQuery(e.target.value)}
                            className="InputStyleTemp"
                        />
                        <br /> 
                        {selectedLocation.country}
                    </TimeDay>
                    <TimeDay>{time}</TimeDay>
                    <TimeDay>{day}</TimeDay>
                </div>
            </TemperatureInfo>
                <Thermometer
                    theme={isDay === 1 ? "dark" : "light"}
                    value={temp}
                    max="40"
                    steps="4"
                    format="°C"
                    size="large"
                    height="320"
                />
                <Temperature>
                    {temp}
                    <CelsiusActualTemp>°C</CelsiusActualTemp>
                </Temperature>
        </TempActualContainer>
    );
}

export default TempActual;

// Styles 

const TempActualContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const TemperatureInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Temperature = styled.span`
    font-size: 5rem;
    font-weight: 700;
    color: white;
    display: flex;
    align-items: center;
    position: relative;
    margin: auto;
`;

const TimeDay = styled.div`
    font-size: 2.2rem;
    font-weight: 600;
    color: white;
    text-align: center;
    font-family: 'Mooli', sans-serif;
`;

const IconInput = styled(FontAwesomeIcon)`
    font-size: 2.2rem;
    color: white;
`

const CelsiusActualTemp = styled(SymbolCelsius)`
    position: relative  ;
    top: -30px;
    right: 5px;
    color: white;
`;

const IconTempAContainer = styled.div`
    display: flex;
    margin-bottom: -3%;
`

const ErrorMessage = styled.div`
    color: red;
    font-size: 1.2rem;
`;