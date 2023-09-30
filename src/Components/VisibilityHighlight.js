import { ContainerHL, HeaderHighlights, SHighlights, PHighlights, SHighlightsUnits } from "../Styles/GlobalStyles";
import styled from "styled-components";

function VisibilityHighlight({ visibility }) {
    return (
        <ContainerHL>
            <HeaderHighlights>VISIBILIDAD</HeaderHighlights>
            <SHighlightsVisibility>{visibility}<SHighlightsUnits>km</SHighlightsUnits></SHighlightsVisibility>
            <PHighlightsVisibility>Promedio</PHighlightsVisibility>
        </ContainerHL>
    );
}

export default VisibilityHighlight;

// Styles 

const SHighlightsVisibility = styled(SHighlights)`
    margin: 0 0 0 -48%;
`

const PHighlightsVisibility = styled(PHighlights)`
    margin: 0 0 5% -45%;
`