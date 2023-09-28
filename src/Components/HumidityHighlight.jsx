import { ContainerHL, HeaderHighlights, SHighlights, SHighlightsUnits, PHighlights } from "../Styles/GlobalStyles";
import styled from "styled-components";

function HumidityHighlight() {
    return (
        <ContainerHL>
            <HeaderHighlights>HUMEDAD</HeaderHighlights>
            <SHighlightsHumidity>12<SHighlightsUnits>%</SHighlightsUnits></SHighlightsHumidity>
            <PHighlights>Normal</PHighlights>
        </ContainerHL>
    );
}

export default HumidityHighlight;

// Styles 
const SHighlightsHumidity = styled(SHighlights)`
    margin: 0 0 0 -45%; 
`