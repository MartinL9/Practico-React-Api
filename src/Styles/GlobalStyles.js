import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

// Contenedor Descatados Styles
export const ContainerHL = styled.div`
    display: flex;
    height: 24.6vh;
    width: 26.5rem;
    border: solid 1px white;
    border-radius: 10px;
    background-color: white;
    align-items: center;
`;

// Componentes Descatados Styles
export const HeaderHighlights = styled.p`
    font-size: 2rem;
    margin: 5% 5% 0;
    color: rgb(150, 150, 150);
    align-self: baseline;
`

export const SHighlights = styled.span`
    font-size: 3.5rem;
    font-weight: 900;
    color: rgb(52,132,139);
`

export const SHighlightsUnits = styled.span`
    font-size: 2rem;
    font-weight: 100;
    color: rgb(52,132,139);
`

export const PHighlights = styled.p`
    font-size: 1.5rem;
    font-weight: 800;
    color: rgb(52,132,139);
    align-self: end;
    margin: 0 0 5% -20%
`

// MaxMin Components Styles
export const ContainerMax = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 22vh;
    width: 13vw;    
    border: solid 1px orange;
    border-radius: 10px 0 0 10px;
    background-color: rgb(214,146,81);
    color: white;
`;

export const ContainerMin = styled(ContainerMax)`
    border-radius: 0 10px 10px 0;
`

export const PMinMaxTemp = styled.p`
    margin: auto;
    font-size: 4rem;
    font-weight: 700;
    position: relative;
`

export const SymbolCelsius = styled.span`
    font-size: 2rem; 
    font-weight: 400;
    position: absolute;
    right: -40%;
`

export const PMaxMin = styled.p`
    font-size: 2rem;
    margin: 0 70% 5% 0;
    position: relative;
`

export const IconMaxMin = styled(FontAwesomeIcon)`
    position: absolute;
    left: 250%;
    bottom: -5%; 
    font-size: 4rem;
`