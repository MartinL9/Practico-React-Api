import { ContainerHL, SHighlightsUnits, HeaderHighlights, SHighlights} from "../Styles/GlobalStyles";
import styled from "styled-components";

function PressureHighlight({ pressure }) {
    return (
        <ContainerHL>
            <HeaderHighlights>PRESÍON</HeaderHighlights>
            <SHighlightsPressure>{pressure}<SHighlightsUnits>hPa</SHighlightsUnits></SHighlightsPressure>
        </ContainerHL>
    );
}

export default PressureHighlight;

// Styles
const SHighlightsPressure = styled(SHighlights)`
    margin: 0 0 0 -37%; 
`
