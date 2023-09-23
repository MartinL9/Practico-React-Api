import {ContainerMin} from '../Styles/GlobalStyles';

function MinTemp({ min }) {
    return (
        <ContainerMin>
            <p>{min}°C</p>
            <p>Mín</p>
        </ContainerMin>
    );
}

export default MinTemp;