import React from 'react';
import styled from 'styled-components';

function HourlyTemp() {
const hours = [
    '1:00', '2:00', '3:00', '4:00', '5:00', '6:00','7:00', '8:00', '9:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
];
const temperatures = [40, 20, 0];

return (
    <>
        <h2>Hoy</h2>
        <TempColumnDiv>
        <div>
            {temperatures.map((temp, index) => (
            <div key={index} className="temperature-item">
                {temp}°C
            </div>
            ))}
        </div>
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

const TempColumnDiv = styled.div`
    border-radius: 10px;
    height: 13.625rem;
    background-color: rgb(235,194,112);
`

const HourContainer = styled.div`
    display: flex; 
    flex-direction: row; 
    justify-content: space-evenly;
    margin-top: 5rem;
`