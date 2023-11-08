import styled from "styled-components";

function InfoTransport({ selectedTripInfo }) {
    const busCount = selectedTripInfo.length;
    const stoppedBuses = selectedTripInfo.filter((item) => Math.abs(item.speed) < 0.001);
    const movingBuses = selectedTripInfo.length - stoppedBuses.length;
    console.log(selectedTripInfo)

    if (busCount > 0) {
        return (
            <InfoContainer>
                <HeaderInfo>Informacion Adicional</HeaderInfo>
                <ContainerDetails>
                    <strong>Nombre de agencia: {selectedTripInfo[0].agency_name}</strong>
                    <strong>Linea: {selectedTripInfo[0].route_short_name}</strong>
                    <strong>
                        Cantidad de Colectivos: {busCount}
                        <br />
                        Colectivos en movimiento: {movingBuses}
                        <br />
                        Colectivos detenidos: {stoppedBuses.length}
                    </strong>
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
`;

const HeaderInfo = styled.h2`
    font-size: 2rem;
    text-align: center;
    margin: 0;
`

const ContainerDetails = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: 1fr;
    row-gap: 5px;
    column-gap: 5px;
    align-items: center;
    justify-items: center;
`