import styled from "styled-components";

// MaxMin Components Styles
export const ContainerMax = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10vh;
    width: 50%;    
    border: solid 1px orange;
    border-radius: 10px 0 0 10px;
    background: linear-gradient(20deg, rgb(227,83,82), rgb(211,179,82));
    color: white;
    padding: 0 10px;
`;

export const ContainerMin = styled(ContainerMax)`
    border-radius: 0 10px 10px 0;
    background: linear-gradient(170deg, rgb(211,179,82), rgb(227,83,82));
`

export const PMinMaxTemp = styled.p`
    font-size: 3.5rem;
    font-weight: 700;
`

export const SymbolCelsius = styled.span`
    font-size: 2rem; 
    font-weight: 400;
    position: absolute;
`

export const PMaxMin = styled.p`
    font-size: 2rem;
`

// Contenedor Descatados Styles
export const ContainerHL = styled.div`
    display: flex;
    height: 13vh;
    width: 15vw;
    border: solid 1px white;
    border-radius: 10px;
    background-color: white;
    align-items: center;
`;

// Componentes Descatados Styles
export const HeaderHighlights = styled.p`
    font-size: 1.5rem;
    margin: 5% 9% 0;
    color: rgb(150, 150, 150);
    align-self: baseline;
`

export const SHighlights = styled.span`
    font-size: 2.5rem;
    font-weight: 900;
    color: rgb(52,132,139);
`

export const SHighlightsUnits = styled.span`
    font-size: 2rem;
    font-weight: 100;
    color: rgb(52,132,139);
`

export const PHighlights = styled.p`
    font-size: 1.2rem;
    font-weight: 800;
    color: rgb(52,132,139);
    align-self: end;
    margin: auto auto 1% -30%;
`

export const BarDot = styled.div`
    border-radius: 10px;
    background-color: #D9D9D9;
    height: 7rem; 
    width: 1.5rem; 
    margin: auto 14% auto 0;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        width: 1.5rem;
        height: 1.5rem;
        background-color: rgb(213,182,73);
        border-radius: 50%;
        border: solid 5px rgb(195,133,63);
        top: ${({ dotposition }) => `${(10 - 4.5) * (1 - dotposition / 100)}rem`}; 
        margin-left: -5px;
`