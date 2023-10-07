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
                    trailColor: "#eee",
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
    height: 15vh;
    width: 15vw;
    position: absolute;
    margin-left: 4%;
`
const SHighlightsUvIndex = styled(SHighlights)`
    position: absolute;
    top: ${({ customtextuv }) => 
        customtextuv === "Bajo" ||
        customtextuv === "Alto" ||
        customtextuv === "Extremo"
        ? "30%"
        : customtextuv === "Moderado"
        ? "40%"
        : "35%"
        };
    left: ${({ customtextuv }) =>  
        customtextuv === "Bajo" ||
        customtextuv === "Alto"
        ? "34%"
        : customtextuv === "Moderado"
        ? "17%"
        : customtextuv === "Muy Alto"
        ? "20%"
        : customtextuv === "Extremo"
        ? "23%"
        : ""
    };
    font-size: 40px;
`

// Bajo left: 34%;
// Moderado left: 17%;
// Alto left: 34%;
// Muy alto left: 20%;
// Extremo left: 23%;
    