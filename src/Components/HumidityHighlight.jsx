import { ContainerHL, HeaderHighlights, SHighlights, SHighlightsUnits, PHighlights, BarDot } from "../Styles/GlobalStyles";
import styled from "styled-components";

function HumidityHighlight({ humidity }) {
    return (
        <ContainerHL>
            <HeaderHighlights>HUMEDAD</HeaderHighlights>
            <SHighlightsHumidity>
                {humidity}
                <SHighlightsUnits>%</SHighlightsUnits>
            </SHighlightsHumidity>
            <PHighlights>Normal</PHighlights>
            <BarDot dotposition={humidity} />
        </ContainerHL>
    );
}

export default HumidityHighlight;

// Styles 
const SHighlightsHumidity = styled(SHighlights)`
    margin: auto auto auto -45%; 
`