import { useState } from 'react';
import React from 'react';
import styled from 'styled-components';

function HourlyTemp({ tempHour }) {
    const hours = [
        '00:00', '03:00', '06:00', '09:00', '12:00',
        '15:00', '18:00', '21:00', '00:00 '
    ];

    const hourlyTemperatures = tempHour;
    const [hoveredTemps, setHoveredTemps] = useState({});

    const handleTempHover = (hour, temperature) => {
        setHoveredTemps((prevHoveredTemps) => ({
            ...prevHoveredTemps,
            [hour]: temperature,
        }));
    };

    const handleTempLeave = (hour) => {
        setHoveredTemps((prevHoveredTemps) => {
        const { [hour]: _, ...rest } = prevHoveredTemps;
        return rest;
        });
    };

return (
    <Container>
        <HeaderHT>Hoy</HeaderHT>
        <TempColumnDiv>
            <TempContainer>
                <TempDiv>40°C</TempDiv>
                <TempDiv>20°C</TempDiv>
                <TempDiv0>0°C</TempDiv0>
            </TempContainer>
            <HourContainer>
                {hours.map((hour, index) => (
                    <HourItem
                    key={index}
                    onMouseEnter={() => handleTempHover(hour, hourlyTemperatures[index])}
                    onMouseLeave={() => handleTempLeave(hour)}
                    >
                        <TempBar style={{ height: `${hourlyTemperatures[index]/ 6}rem` }}>
                            {hoveredTemps[hour] !== undefined && (
                                <TempPopup>{hoveredTemps[hour]}°C</TempPopup>
                            )}
                        </TempBar>
                        {hour}
                    </HourItem>
                ))}
            </HourContainer>
        </TempColumnDiv>
    </Container>
);
}

export default HourlyTemp;

// Styles
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HeaderHT = styled.h2`
    color: white;
    font-size: 2rem;
    margin: -1% 0 1%;
`

const TempColumnDiv = styled.div`
    display: flex;
    border-radius: 10px;
    height: 10rem;
    background: linear-gradient(7deg, rgba(218,140,82,1) 30%, rgba(247,220,129,1) 100%);
    width: 100%;
}
`

const TempContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 3vw;
`

const TempDiv = styled.div`
    margin: 1rem 0 1rem 1rem;
`

const TempDiv0 = styled(TempDiv)`
    margin-left: 1.5rem;
`

const HourContainer = styled.div`
    display: flex; 
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-around;
    width: 100%;
    padding-bottom: 0.5rem;
`

const HourItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TempBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    background-color: white;
    width: 20px;
    position: relative;
    bottom: 0;
    padding: 0;
`

const TempPopup = styled.div`
    background-color: rgba(255, 255, 255, 0.9);
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
    font-size: 0.8rem;
    color: black;
`;