import { ContainerHL, SHighlightsUnits, HeaderHighlights, SHighlights} from "../Styles/GlobalStyles";
import styled from "styled-components";

function PressureHighlight() {
    return (
        <ContainerHL>
            <HeaderHighlights>PRESÍON</HeaderHighlights>
            <SHighlightsPressure>1006.4 <SHighlightsUnits>mb</SHighlightsUnits></SHighlightsPressure>
        </ContainerHL>
    );
}

export default PressureHighlight;

// Styles
const SHighlightsPressure = styled(SHighlights)`
    margin: 0 0 0 -37%; 
`
