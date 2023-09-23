import styled from "styled-components";

export const ContainerHL = styled.div`
    height: 22vh;
    width: 14.063rem;
    border: solid 1px white;
    border-radius: 10px;
    background-color: white;
`;

export const ContainerMax = styled.div`
    height: 22vh;
    width: 10vw;    
    border: solid 1px orange;
    border-radius: 10px 0 0 10px;
    background-color: rgb(214,146,81);
`;

export const ContainerMin = styled(ContainerMax)`
    border-radius: 0 10px 10px 0;
`
