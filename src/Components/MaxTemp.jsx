import { ContainerMax } from '../Styles/GlobalStyles';
import { PMinMaxTemp } from '../Styles/GlobalStyles';
import { PMaxMin } from '../Styles/GlobalStyles';
import { SymbolCelsius } from '../Styles/GlobalStyles'
import { IconMaxMin } from '../Styles/GlobalStyles';
import { faSun } from '@fortawesome/free-solid-svg-icons';

function MaxTemp({ max }) {
    return (
        <ContainerMax>
            <PMinMaxTemp>{max}<SymbolCelsius>°C</SymbolCelsius></PMinMaxTemp>
            <PMaxMin>Máx <IconMaxMin icon={faSun} /></PMaxMin>
        </ContainerMax>
    );
}

export default MaxTemp;
