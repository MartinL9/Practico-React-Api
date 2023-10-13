import { ContainerMax, PMinMaxTemp, PMaxMin, SymbolCelsius } from '../Styles/GlobalStyles';
import {WiSunrise } from 'weather-icons-react';

function MaxTemp({ max }) {
    return (
        <ContainerMax>
            <PMaxMin>Máx</PMaxMin>
            <PMinMaxTemp>{max}<SymbolCelsius>°C</SymbolCelsius></PMinMaxTemp>
            <WiSunrise size={100} color="white" />
        </ContainerMax>
    );
}

export default MaxTemp;
