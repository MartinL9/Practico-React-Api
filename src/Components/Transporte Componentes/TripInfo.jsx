import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const TripInfo = ({ selectedTripInfo }) => {
    if (!Array.isArray(selectedTripInfo) || selectedTripInfo.length === 0) {
        return (
            <TripInfoContainer>
                <div>
                    <strong>Destino Seleccionado: </strong> No se ha encontrado colectivo disponible a destino.
                </div>
            </TripInfoContainer>
        );
    }
    
    return (
        <TripInfoContainer>
            <StyledStrong><FontAwesomeIcon icon={faChevronDown} />Destino Seleccionado<FontAwesomeIcon icon={faChevronDown} /></StyledStrong>
            <TripNameContainer>
                {selectedTripInfo[0].trip_headsign}
            </TripNameContainer>
        </TripInfoContainer>
    );
};

const TripInfoContainer = styled.div`
    color: white;
    background-color: rgb(48,56,65);
    padding: 10px;
    width: 50.59vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledStrong = styled.strong`
    font-size: 1.5rem;
`

const TripNameContainer = styled.div`
    font-size: 1.5rem;
`
export default TripInfo;