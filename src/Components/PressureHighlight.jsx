import { ContainerHL, SHighlightsUnits, HeaderHighlights, SHighlights} from "../Styles/GlobalStyles";
import styled from "styled-components";
import presion from "../Media/presion.svg";

function PressureHighlight({ pressure }) {
    return (
        <ContainerHL>
            <HeaderHighlights>PRESÍON</HeaderHighlights>
            <SHighlightsPressure>{pressure}<SHighlightsUnits>hPa</SHighlightsUnits></SHighlightsPressure>
            <img src={presion} alt="Barometer" style={{ height: "5rem", marginTop: "10%" }}></img>
        </ContainerHL>
    );
}

export default PressureHighlight;

// Styles
const SHighlightsPressure = styled(SHighlights)`
    margin: 10% 0 0 -47%; 
`
