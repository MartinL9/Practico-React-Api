import { ContainerMin, PMinMaxTemp, PMaxMin, SymbolCelsius } from '../Styles/GlobalStyles';
import { WiMoonset } from 'weather-icons-react';


function MinTemp({ min }) {
    return (
        <ContainerMin>
            <PMaxMin>Mín</PMaxMin>
            <PMinMaxTemp>{min}<SymbolCelsius>°C</SymbolCelsius></PMinMaxTemp>
            <WiMoonset size={100} color="white" />
        </ContainerMin>
    );
}

export default MinTemp;

