import React from 'react';
import styled from 'styled-components';

function HourlyTemp() {
const hours = [
    '00:00', '3:00', '6:00', '9:00', '12:00',
    '15:00', '18:00', '21:00', '00:00'
];
const temperatures = [40, 20, 0];

return (
    <>
        <HeaderHT>Hoy</HeaderHT>
        <TempColumnDiv>
        <TempDiv>
            {temperatures.map((temp, index) => (
            <div key={index} className="temperature-item">
                {temp}°C
            </div>
            ))}
        </TempDiv>
        <HourContainer>
            {hours.map((hour) => (
            <div key={hour} className="hour-item">
                {hour}
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

const TempDiv = styled.div`
    display: flex;
    flex-direction: column;

    .temperature-item {
        margin: 1rem 1rem 1rem;
    }
`

const HourContainer = styled.div`
    display: flex; 
    flex-direction: row; 
    justify-content: space-evenly;
    margin-top: 1rem;
`