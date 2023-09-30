import { ContainerHL, HeaderHighlights, SHighlights, SHighlightsUnits, PHighlights } from "../Styles/GlobalStyles";
import styled from "styled-components";

function HumidityHighlight({ humidity }) {
    return (
        <ContainerHL>
            <HeaderHighlights>HUMEDAD</HeaderHighlights>
            <SHighlightsHumidity>{humidity}<SHighlightsUnits>%</SHighlightsUnits></SHighlightsHumidity>
            <PHighlights>Normal</PHighlights>
        </ContainerHL>
    );
}

export default HumidityHighlight;

// Styles 
const SHighlightsHumidity = styled(SHighlights)`
    margin: 0 0 0 -45%; 
`