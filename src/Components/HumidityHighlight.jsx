import { ContainerHL, HeaderHighlights, SHighlights, SHighlightsUnits, PHighlights, BarDot } from "../Styles/GlobalStyles";
import styled from "styled-components";

function getHumidityLevel(humidity) {
    if (humidity < 35) {
        return "Bajo";
    } else if (humidity >= 36 && humidity <= 60) {
        return "Normal";
    } else {
        return "Alta";
    }
}

function HumidityHighlight({ humidity }) {
    const humidityLevel = getHumidityLevel(humidity);

    return (
        <ContainerHL>
            <HeaderHighlights>HUMEDAD</HeaderHighlights>
            <SHighlightsHumidity>
                {humidity}
                <SHighlightsUnits>%</SHighlightsUnits>
            </SHighlightsHumidity>
            <PHighlights>{humidityLevel}</PHighlights>
            <BarDot dotposition={humidity} />
        </ContainerHL>
    );
}

export default HumidityHighlight;

// Styles 
const SHighlightsHumidity = styled(SHighlights)`
    margin: auto auto auto -45%; 
`