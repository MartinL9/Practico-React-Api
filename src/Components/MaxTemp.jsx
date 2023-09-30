import { ContainerMax, PMinMaxTemp, PMaxMin, SymbolCelsius, IconMaxMin} from '../Styles/GlobalStyles';
import { WiDaySunny } from 'weather-icons-react';

function MaxTemp({ max }) {
    return (
        <ContainerMax>
            <PMinMaxTemp>{max}<SymbolCelsius>°C</SymbolCelsius></PMinMaxTemp>
            <PMaxMin>Máx <IconMaxMin><WiDaySunny size={100} color="white" /></IconMaxMin></PMaxMin>
        </ContainerMax>
    );
}

export default MaxTemp;
