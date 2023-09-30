import { ContainerHL, HeaderHighlights, SHighlights } from "../Styles/GlobalStyles";
import React from "react";

function UVIndexHighlight({ uvIndex }) {
    return (
        <ContainerHL>
            <HeaderHighlights>ÍNDICE UV</HeaderHighlights>
            <SHighlights>{uvIndex}</SHighlights>
        </ContainerHL>
    );
}

export default UVIndexHighlight;