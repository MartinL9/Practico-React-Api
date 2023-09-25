import {ContainerMin} from '../Styles/GlobalStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

function MinTemp({ min }) {
    return (
        <ContainerMin>
            <p>{min}°C</p>
            <p>Mín
            <FontAwesomeIcon icon={faMoon} />
            </p>
        </ContainerMin>
    );
}

export default MinTemp;