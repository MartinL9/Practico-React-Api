import { ContainerHL, HeaderHighlights, SHighlights, SHighlightsUnits, PHighlights } from "../Styles/GlobalStyles";
import styled from "styled-components";
import { 
    WiDirectionUp, 
    WiDirectionUpRight, 
    WiDirectionRight, 
    WiDirectionDownRight, 
    WiDirectionDown, 
    WiDirectionDownLeft, 
    WiDirectionLeft, 
    WiDirectionUpLeft 
} from 'weather-icons-react'; 

function WindHighlight({ wind, windDirection }) {
    let WindIcon = "";

    if (windDirection >= 0 && windDirection <= 15) {
        WindIcon = <WiDirectionUp size={70} />;
    } else if (windDirection >= 16 && windDirection <= 68) {
        WindIcon = <WiDirectionUpRight size={80} />;
    } else if (windDirection >= 69 && windDirection <= 113) {
        WindIcon = <WiDirectionRight size={80} />;
    } else if (windDirection >= 114 && windDirection <= 158) {
        WindIcon = <WiDirectionDownRight size={85} />;
    } else if (windDirection >= 159 && windDirection <= 203) {
        WindIcon = <WiDirectionDown size={80} />;
    } else if (windDirection >= 204 && windDirection <= 235) {
        WindIcon = <WiDirectionDownLeft size={85} />;
    } else if (windDirection >= 236 && windDirection <= 290) {
        WindIcon = <WiDirectionLeft size={80} />;
    } else if (windDirection >= 291 && windDirection <= 335) {
        WindIcon = <WiDirectionUpLeft size={80} />;
    } else {
        WindIcon = <WiDirectionUp size={90} />;
    }

    return (
        <ContainerHL>
            <HeaderHighlights>VIENTO</HeaderHighlights>
            <SHighlightsWind>
                {wind}
                <SHighlightsUnits>km/h</SHighlightsUnits>
            </SHighlightsWind>
            <PHighlightsWind>
                Dirección del viento
                <WindIconContainer>
                    {WindIcon}
                </WindIconContainer>
            </PHighlightsWind>
        </ContainerHL>
    );
}

export default WindHighlight;

// Styles
const SHighlightsWind = styled(SHighlights)`
    margin: 5% 0 0 -25%;
`

const PHighlightsWind = styled(PHighlights)`
    margin: 0 0 1% -65%;
`

const WindIconContainer = styled.span`
    position: absolute;
    top: 80vh;
    left: 27vw;
`
