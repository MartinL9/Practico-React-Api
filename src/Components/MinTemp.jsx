import { ContainerMin, PMinMaxTemp, PMaxMin, SymbolCelsius, IconMaxMin } from '../Styles/GlobalStyles';
import styled from 'styled-components';
import { WiMoonWaxingCrescent2, WiStars } from 'weather-icons-react';


function MinTemp({ min }) {
    return (
        <ContainerMin>
            <PMinMaxTemp>{min}<SymbolCelsius>°C</SymbolCelsius></PMinMaxTemp>
            <PMaxMin>
                Mín 
                <IconMaxMin>
                    <WiMoonWaxingCrescent2 size={100} color="white" />
                    <StarsIconMin>
                        <WiStars size= {100} color="white" />
                    </StarsIconMin>
                </IconMaxMin>
            </PMaxMin>
        </ContainerMin>
    );
}

export default MinTemp;

// Styles 
const StarsIconMin = styled(IconMaxMin)`
    left: 8%;
    bottom: 0%;
`
