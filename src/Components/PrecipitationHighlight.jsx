import { ContainerHL, HeaderHighlights, SHighlights, PHighlights, SHighlightsUnits, BarDot } from "../Styles/GlobalStyles";
import styled from "styled-components";

function PrecipitationHighlight({ precipitation }) {
    return (
        <ContainerHL>
            <HeaderHighlights>PRECIPITACIÓN</HeaderHighlights>
            <SHighlightsPrecip>{precipitation}
                <SHighlightsUnits>%</SHighlightsUnits>
            </SHighlightsPrecip>
            <PHighlightsPrecip>Sample text</PHighlightsPrecip>
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