import { ContainerHL, HeaderHighlights, SHighlights, PHighlights, SHighlightsUnits, BarDot } from "../Styles/GlobalStyles";
import styled from "styled-components";

function getPrecipitationLevel(precipitation) {
    if (precipitation < 2) {
        return "Débiles";
    } else if (precipitation >= 3 && precipitation <= 15) {
        return "Moderadas";
    } else if (precipitation >= 16 && precipitation <= 30) {
        return "Fuertes";
    } else if (precipitation >= 31 && precipitation <= 60) {
        return "Muy Fuertes";
    } else {
        return "Torrenciales";
    }
}

function PrecipitationHighlight({ precipitation }) {
    const precipitationLevel = getPrecipitationLevel(precipitation);

    return (
        <ContainerHL>
            <HeaderHighlights>PRECIPITACIÓN</HeaderHighlights>
            <SHighlightsPrecip>{precipitation}
                <SHighlightsUnits>%</SHighlightsUnits>
            </SHighlightsPrecip>
            <PHighlightsPrecip>{precipitationLevel}</PHighlightsPrecip>
            <BarDotPrec dotposition={precipitation} />
        </ContainerHL>
    );
}

export default PrecipitationHighlight;

// Styles 
const SHighlightsPrecip = styled(SHighlights)`
    margin: 0 0 0 -61%;
`

const PHighlightsPrecip = styled(PHighlights)`
    margin: 0 0 5% -15%;
`

const BarDotPrec = styled (BarDot)`
    margin-left: 49%;
`