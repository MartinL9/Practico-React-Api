import { ContainerHL, HeaderHighlights, SHighlights, SHighlightsUnits } from "../Styles/GlobalStyles";
import styled from "styled-components";

function WindHighlight({ wind }) {
    return (
        <ContainerHL>
            <HeaderHighlights>VIENTO</HeaderHighlights>
            <SHighlightsWind>{wind}<SHighlightsUnits>km/h</SHighlightsUnits></SHighlightsWind>
        </ContainerHL>
    );
}

export default WindHighlight;

// Styles
const SHighlightsWind = styled(SHighlights)`
    margin: 0 -13% 0 -32%;
`
