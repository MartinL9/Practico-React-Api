import { ContainerHL, HeaderHighlights, SHighlights, PHighlights } from "../Styles/GlobalStyles";
import styled from "styled-components";

function AirQualityHighlight() {
    return (
        <ContainerHL>
            <HeaderHighlights>CALIDAD DEL AIRE</HeaderHighlights>
            <SHighlightsAir>37</SHighlightsAir>
            <PHighlightsAir>Bueno</PHighlightsAir>
        </ContainerHL>
    );
}

export default AirQualityHighlight;

// Styles 
const SHighlightsAir = styled(SHighlights)`
    margin: 0 0 0 -72%;
`

const PHighlightsAir = styled(PHighlights)`
    margin: 0 0 5% -15%;
`