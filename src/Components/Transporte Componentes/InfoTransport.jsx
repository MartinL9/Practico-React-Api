import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

function InfoTransport({ selectedTripInfo }) {
    const busCount = selectedTripInfo.length;
    const stoppedBuses = selectedTripInfo.filter((item) => Math.abs(item.speed) < 0.001);
    const movingBuses = selectedTripInfo.length - stoppedBuses.length;

    if (busCount > 0) {
        return (
            <InfoContainer>
                <HeaderInfo>Informacion Adicional</HeaderInfo>
                <IconContainer><FontAwesomeIcon icon={faAnglesDown} fade size="2xl"/></IconContainer>
                <ContainerDetails>
                    <p><strong>Nombre de agencia:</strong> {selectedTripInfo[0].agency_name}</p>
                    <p><strong>Linea: </strong>{selectedTripInfo[0].route_short_name}</p>
                    <p>
                        <strong>Cantidad de Colectivos: </strong>{busCount}
                        <br />
                        <strong>Colectivos en movimiento: </strong>{movingBuses}
                        <br />
                        <strong>Colectivos detenidos: </strong>{stoppedBuses.length}
                    </p>
                </ContainerDetails>
            </InfoContainer>
        );
    } else {
        return (
            <InfoContainer>
                <HeaderInfo>Informacion Adicional</HeaderInfo>
                <ContainerDetails>
                    <strong>No hay información disponible</strong>
                </ContainerDetails>
            </InfoContainer>
        );
    }
}

export default InfoTransport;

// Styles
const InfoContainer = styled.div`
    color: white;
    background-color: rgb(60, 68, 78);
    padding: 10px;
    width: 50.59vw;
    height: 22.1vh;
    border-radius: 0 0 10px 10px;
`;

const HeaderInfo = styled.h2`
    font-size: 2rem;
    text-align: center;
    margin: 0;
`

const ContainerDetails = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    row-gap: 5px;
    column-gap: 5px;
    align-items: center;
    justify-items: center;
`
const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 2% 0 0 0;
`