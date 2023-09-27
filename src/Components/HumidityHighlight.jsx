import { ContainerHL } from "../Styles/GlobalStyles";
import { PHighlights } from "../Styles/GlobalStyles";

function HumidityHighlight() {
    return (
        <ContainerHL>
            <PHighlights>HUMEDAD</PHighlights>
            <span>12%</span>
            <p>Normal</p>
        </ContainerHL>
    );
}

export default HumidityHighlight;