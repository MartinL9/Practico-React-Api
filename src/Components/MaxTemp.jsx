import { ContainerMax } from '../Styles/GlobalStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

function MaxTemp({ max }) {
    return (
        <ContainerMax>
            <p>{max}°C</p>
            <p>Máx 
                <FontAwesomeIcon icon={faSun} />
            </p>
        </ContainerMax>
    );
}

export default MaxTemp;