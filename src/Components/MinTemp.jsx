import { ContainerMin } from '../Styles/GlobalStyles';
import { PMinMaxTemp } from '../Styles/GlobalStyles';
import { PMaxMin } from '../Styles/GlobalStyles';
import { SymbolCelsius } from '../Styles/GlobalStyles';
import { IconMaxMin } from '../Styles/GlobalStyles';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

function MinTemp({ min }) {
    return (
        <ContainerMin>
            <PMinMaxTemp>{min}<SymbolCelsius>°C</SymbolCelsius></PMinMaxTemp>
            <PMaxMin>Mín <IconMaxMin icon={faMoon} /></PMaxMin>
        </ContainerMin>
    );
}

export default MinTemp;
