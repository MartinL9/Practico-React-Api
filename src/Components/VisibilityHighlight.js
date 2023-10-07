import { ContainerHL, HeaderHighlights, SHighlights, PHighlights, SHighlightsUnits } from "../Styles/GlobalStyles";
import styled from "styled-components";

function getVisibilityLevel(visibility) {
    const visibilityValue = parseFloat(visibility);

    if (visibilityValue >= 0 && visibilityValue < 5) {
        return "Baja";
    } else if (visibilityValue >= 5 && visibilityValue < 20) {
        return "Promedio";
    } else if (visibilityValue >= 20 && visibilityValue < 50) {
        return "Buena";
    }
}

function VisibilityHighlight({ visibility }) {
    const visibilityLevel = getVisibilityLevel(visibility);

    return (
        <ContainerHL>
            <HeaderHighlights>VISIBILIDAD</HeaderHighlights>
            <SHighlightsVisibility>
                {visibility}
                <SHighlightsUnits>km</SHighlightsUnits>
            </SHighlightsVisibility>
            <PHighlightsVisibility visibilitylevel={visibilityLevel}>
                {visibilityLevel}
            </PHighlightsVisibility>
        </ContainerHL>
    );
}

export default VisibilityHighlight;

// Styles 

const SHighlightsVisibility = styled(SHighlights)`
    margin: 0 0 0 -48%;
`

const PHighlightsVisibility = styled(PHighlights)`
    margin: 0 0 5% ${props => (props.visibilitylevel === "Baja" ? "-40%" : "-45%")};
`