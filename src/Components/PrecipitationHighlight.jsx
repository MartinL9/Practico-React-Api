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
    margin: 5% 0 0 -40%;
`

const PHighlightsPrecip = styled(PHighlights)`
    margin: ${({ customprecipitationlevel }) =>
            customprecipitationlevel === "Moderadas" ||
            customprecipitationlevel === "Muy Fuertes" ||
            customprecipitationlevel === "Torrenciales"
            ? "0 0 1% -30%"
            : "0 0 1% -22%"
    };
`

const BarDotPrec = styled(BarDot)`
    margin-right: 0;
    margin-left: ${({ customprecipitationlevel }) => 
        customprecipitationlevel === "Moderadas"
        ? "15%"
        : customprecipitationlevel === "Muy Fuertes" ||
        customprecipitationlevel === "Torrenciales"
        ? "13%"
        : "20%"
    };
`