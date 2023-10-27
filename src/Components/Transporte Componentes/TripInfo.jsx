import React from 'react';
import styled from 'styled-components';

const TripInfo = ({ selectedTripInfo }) => {
    const busCount = selectedTripInfo.length;
    
    if (!Array.isArray(selectedTripInfo) || selectedTripInfo.length === 0) {
        return (
            <TripInfoContainer>
                <div>
                    <strong>Destino Seleccionado: </strong> No se ha seleccionado un destino.
                </div>
                <div>
                    <strong>Cantidad de Colectivos: </strong> {busCount}
                </div>
            </TripInfoContainer>
        );
    }
    
    return (
        <TripInfoContainer>
        <div>
            <strong>Destino Seleccionado: </strong>
            {selectedTripInfo[0].trip_headsign}
        </div>
        <div>
            <strong>Cantidad de Colectivos: </strong>
            {busCount}
        </div>
        </TripInfoContainer>
    );
};

const TripInfoContainer = styled.div`
    color: white;
    background-color: rgb(48,56,65);
    padding: 10px;
    width: 50.59vw;  
    display: flex;
    justify-content: space-between;
`;

export default TripInfo;