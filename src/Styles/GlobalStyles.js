import styled from "styled-components";

// Temp Actual Styles
export const IconTempAContainer = styled.div`
    display: flex;
    align-self: flex-start;
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
    background: linear-gradient(20deg, rgb(227,83,82), rgb(211,179,82));
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
    right: -25%;
`

export const PMaxMin = styled.p`
    font-size: 2rem;
    margin: 0 70% 5% 0;
    position: relative;
`

export const IconMaxMin = styled.span`
    position: absolute;
    left: 230%;
    bottom: -60%; 
`

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
    margin: auto auto 5% -85%;
`

export const BarDot = styled.div`
    border-radius: 10px;
    background-color: #D9D9D9;
    height: 10rem; 
    width: 1.5rem; 
    margin: auto 5% auto 0;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        width: 1.5rem;
        height: 1.5rem;
        background-color: rgb(213,182,73);
        border-radius: 50%;
        border: solid 5px rgb(195,133,63);
        top: ${({ dotposition }) => `${(10 - 1.5) * (1 - dotposition / 100)}rem`}; 
        margin-left: -5px;
`