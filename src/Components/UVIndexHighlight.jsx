import { ContainerHL, HeaderHighlights, SHighlights } from "../Styles/GlobalStyles";
import {  CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from "styled-components";

function getTextUv(uvIndex) {
    uvIndex = Math.round(uvIndex);

    if (uvIndex <= 2) {
        return "Bajo";
    } else if (uvIndex >= 3 && uvIndex <= 5) {
        return "Moderado";
    } else if (uvIndex >= 6 && uvIndex <= 7) {
        return "Alto";
    } else if (uvIndex >= 8 && uvIndex <= 10) {
        return "Muy Alto";
    } else {
        return "Extremo";
    }
}

function UVIndexHighlight({ uvIndex }) {
    const maxValue = 15;
    const TextUv = getTextUv(uvIndex);

    return (
        <ContainerHL>
            <HeaderHighlights>ÍNDICE UV</HeaderHighlights>
            <ContainerBar>
                <CircularProgressbar
                    value={uvIndex}
                    maxValue={maxValue}
                    text={`${uvIndex}`}
                    circleRatio={0.6}
                    styles={buildStyles({
                    rotation: 1 / 2 + 1 / 5 ,
                    strokeLinecap: "round",
                    trailColor: "#ccc",
                    pathColor: `rgb(247,223,123)`,
                    textSize: '20px',
                    textColor: 'rgb(52,132,139)'
                    })}
                />
                <SHighlightsUvIndex customtextuv={TextUv}>{TextUv}</SHighlightsUvIndex>
            </ContainerBar>
        </ContainerHL>
    );
}

export default UVIndexHighlight;

// Styles

const ContainerBar = styled.div`
    height: 10vh;
    padding-right: 1vw;
`
const SHighlightsUvIndex = styled(SHighlights)`
    position: relative;
    top: -55%;
    left: ${({ customtextuv }) =>  
        customtextuv === "Bajo"
        ? "33%"
        : customtextuv === "Alto"
        ? "35%"
        : customtextuv === "Moderado"
        ? "14%"
        : customtextuv === "Muy Alto"
        ? "17%"
        : customtextuv === "Extremo"
        ? "20%"
        : ""
    };
    font-size: 20px;
`