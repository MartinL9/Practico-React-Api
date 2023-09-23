import { ContainerMax } from '../Styles/GlobalStyles';

function MaxTemp({ max }) {
    return (
        <ContainerMax>
            <p>{max}°C</p>
            <p>Máx</p>
        </ContainerMax>
    );
}

export default MaxTemp;