import { useState } from 'react';
import React from 'react';
import styled from 'styled-components';

function HourlyTemp({ tempHour }) {
const hours = [
    '00:00', '03:00', '06:00', '09:00', '12:00',
    '15:00', '18:00', '21:00', '00:00'
];

const hourlyTemperatures = tempHour;
const [hoveredTemp, setHoveredTemp] = useState(null);

return (
    <>
        <HeaderHT>Hoy</HeaderHT>
        <TempColumnDiv>
            <TempContainer>
                <TempDiv>40°C</TempDiv>
                <TempDiv>20°C</TempDiv>
                <TempDiv0>0°C</TempDiv0>
            </TempContainer>
            <HourContainer>
                {hours.map((hour, index) => (
                    <div 
                        key={hour} 
                        className="hour-item"
                        onMouseEnter={() => setHoveredTemp(hourlyTemperatures[index])}
                        onMouseLeave={() => setHoveredTemp(null)}
                    >
                        <TempBar style={{ height: `${hourlyTemperatures[index]/ 4}rem` }} />
                        {hour}
                        {hoveredTemp !== null && (
                            <TempPopup>{hoveredTemp}°C</TempPopup>
                        )}
                    </div>
                ))}
            </HourContainer>
        </TempColumnDiv>
    </>
);
}

export default HourlyTemp;

// Styles

const HeaderHT = styled.h2`
    color: white;
    font-size: 2.1rem;
    margin: 0 0 1%;
`

const TempColumnDiv = styled.div`
    border-radius: 10px;
    height: 13.625rem;
    background-color: rgb(235,194,112);
`

const TempContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const TempDiv = styled.div`
    margin: 1.5rem 1.5rem 1.5rem;
`

const TempDiv0 = styled(TempDiv)`
    margin-left: 2rem;
`

const HourContainer = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: -1.5rem;
`

const TempBar = styled.div`
    border-radius: 5px;
    background-color: white; 
    width: 20px; 
    margin: auto;
    position: absolute;
    bottom: 70%;
    transform: translateX(40%);
`

const TempPopup = styled.div`
    position: absolute;
    top: 35%;
    left: 65%;
    transform: translateX(-50%);
    background-color: rgba(255, 255, 255, 0.9);
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
    font-size: 0.8rem;
    color: black;
`;