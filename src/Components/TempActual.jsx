import styled from "styled-components";
import { SymbolCelsius } from "../Styles/GlobalStyles";

function TempActual({ temp, day, time }) {
    return (
        <>
            <TempP>{temp} <CelsiusActualTemp>°C</CelsiusActualTemp></TempP>
            <PDay>{day}, {time}</PDay>
        </>
    );
}

export default TempActual;

// Styles 

const TempP = styled.p`
    font-size: 7rem;
    font-weight: 700;
    color: white;
`

const CelsiusActualTemp = styled(SymbolCelsius)`
    right: 80%;
    bottom: 77%;
    color: white;
`

const PDay = styled.p`
    align-self: flex-start;
    margin: 0 2%;
    font-size: 2rem;
    font-weight: 400;
    color: white;
`