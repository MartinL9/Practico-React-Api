import { ContainerHL, HeaderHighlights, SHighlights, PHighlights, SHighlightsUnits, BarDot } from "../Styles/GlobalStyles";
import styled from "styled-components";

function getPrecipitationLevel(precipitation) {
    if (precipitation <= 2) {
        return "Débiles";
    } else if (precipitation >= 3 && precipitation <= 15) {
        return "Moderadas";
    } else if (precipitation >= 16 && precipitation <= 30) {
        return "Fuertes";
    } else if (precipitation >= 31 && precipitation <= 60) {
        return "Muy Fuertes";
    } else {
        return "Torrenciales";
    }
}

function PrecipitationHighlight({ precipitation }) {
    const precipitationLevel = getPrecipitationLevel(precipitation);

    return (
        <ContainerHL>
            <HeaderHighlights>PRECIPITACIÓN</HeaderHighlights>
            <SHighlightsPrecip>{precipitation}
                <SHighlightsUnits>%</SHighlightsUnits>
            </SHighlightsPrecip>
            <PHighlightsPrecip customprecipitationlevel={precipitationLevel} >{precipitationLevel}</PHighlightsPrecip>
            <BarDotPrec dotposition={precipitation} customprecipitationlevel={precipitationLevel} />
        </ContainerHL>
    );
}

export default PrecipitationHighlight;

// Styles 
const SHighlightsPrecip = styled(SHighlights)`
    margin: 0 0 0 -61%;
`

const PHighlightsPrecip = styled(PHighlights)`
    margin: ${({ customprecipitationlevel }) =>
            customprecipitationlevel === "Fuertes" ||
            customprecipitationlevel === "Muy Fuertes" ||
            customprecipitationlevel === "Torrenciales"
            ? "0 0 5% -24%"
            : "0 0 5% -15%"
    };
`

const BarDotPrec = styled(BarDot)`
    margin-left: ${({ customprecipitationlevel }) => 
        customprecipitationlevel === "Moderadas" ||
        customprecipitationlevel === "Muy Fuertes" ||
        customprecipitationlevel === "Torrenciales"
        ? "52%"
        : customprecipitationlevel === "Fuertes"
        ? "64%"
        : "62%"
    };
`