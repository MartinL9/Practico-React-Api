import styled from "styled-components";
import Thermometer from 'react-thermometer-component'
import { SymbolCelsius, IconTempAContainer } from "../Styles/GlobalStyles";
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

function TempActual({ temp, day, time, weathercode }) {
    const weatherIcons = {
        0: <WiDaySunny size={125} color="#FFD700" />,
        1: <WiDaySunnyOvercast size={125} color="#FFD700" />,
        2: <WiDaySunnyOvercast size={125} color="#FFD700" />,
        3: <WiDaySunnyOvercast size={125} color="#FFD700" />,
        45: <WiFog size={125} color="#FFD700" />,
        48: <WiFog size={125} color="#FFD700" />,
        51: <WiSprinkle size={125} color="#FFD700" />,
        53: <WiShowers size={125} color="#FFD700" />,
        55: <WiShowers size={125} color="#FFD700" />,
        56: <WiRainMix size={125} color="#FFD700" />,
        57: <WiRainMix size={125} color="#FFD700" />,
        61: <WiRain size={125} color="#FFD700" />,
        63: <WiRain size={125} color="#FFD700" />,
        65: <WiRain size={125} color="#FFD700" />,
        71: <WiSnow size={125} color="#FFD700" />,
        73: <WiSnow size={125} color="#FFD700" />,
        75: <WiSnowWind size={125} color="#FFD700" />,
        77: <WiHail size={125} color="#FFD700" />,
        80: <WiStormShowers size={125} color="#FFD700" />,
        81: <WiStormShowers size={125} color="#FFD700" />,
        82: <WiThunderstorm size={125} color="#FFD700" />,
        85: <WiSnow size={125} color="#FFD700" />,
        86: <WiSnowWind size={125} color="#FFD700" />,
    }

    const weatherIcon = weatherIcons[weathercode];

    return (
        <>
            <Thermometer
                theme="dark"
                value={temp}
                max="50"
                steps="5"
                format="°C"
                size="large"
                height="490"
                />
            <TempP>
                {temp}
                <CelsiusActualTemp>°C</CelsiusActualTemp>
            </TempP>
            <IconTempAContainer>
                {weatherIcon}
            </IconTempAContainer>
            <PDay>{day}, {time}</PDay>
        </>
    );
}

export default TempActual;

// Styles 

const TempP = styled.span`
    position: absolute;
    top: 32.9rem;
    font-size: 6rem;
    font-weight: 700;
    color: white;
`

const CelsiusActualTemp = styled(SymbolCelsius)`
    right: -10%;
    bottom: 60%;
    color: white;
`

const PDay = styled.p`
    align-self: flex-start;
    margin: 0 2%;
    font-size: 2rem;
    font-weight: 400;
    color: white;
`