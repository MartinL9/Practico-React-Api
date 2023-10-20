import { useState } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import datosTransporte from '../DatosTransporte.json'
import styled from 'styled-components';
import Select from 'react-select';

const customIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/9249/9249341.png',
    iconSize: [45, 45],
});

const customStyles = {
    control: (provided) => ({
      ...provided,
      background: 'rgb(48, 56, 65)',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#C0C0C0' : 'transparent',
      color: state.isFocused ? 'blue' : 'black', // Cambia el color del texto
    }),
    singleValue: (provided) => ({
        ...provided,
        color: 'white',
      }),
  };

function MapTransport() {
    const [selectedAgency, setSelectedAgency] = useState('MICROOMNIBUS SAAVEDRA S.A.T.A.C.I.');

    const uniqueAgencyNames = [...new Set(datosTransporte.map(item => item.agency_name))];

    const agencyOptions = uniqueAgencyNames.map(name => ({
        value: name,
        label: name,
    }));
    
    const handleAgencyChange = (selectedOption) => {
        setSelectedAgency(selectedOption);
    };

    return (
        <div>
            <Header>
                <Title>Colectivos</Title>
                <SelectContainer>
                    <Select
                        value={selectedAgency}
                        onChange={handleAgencyChange}
                        options={agencyOptions}
                        placeholder="Selecciona una agencia"
                        styles={customStyles}
                    />
                </SelectContainer>
            </Header>
            <MapContainerStyled center={[-34.64937, -58.61832]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {datosTransporte.map((item, index) => {
                    if (!selectedAgency || item.agency_name === selectedAgency.value) {
                        return (
                            <Marker position={[item.latitude, item.longitude]} icon={customIcon} key={index}>
                            <Popup>
                                <p>Nombre de agencia: {item.agency_name}</p>
                                <p>Línea: {item.route_short_name}</p>
                                <p>Destino: {item.trip_headsign}</p>
                            </Popup>
                            </Marker>
                        );
                    } else {
                        return null;
                    }
                })}
            </MapContainerStyled>
        </div>
    );
}

export default MapTransport;

// Styles 

const MapContainerStyled = styled(MapContainer)`
    border: 2px solid rgb(48,56,65);
    z-index: 0;
`;

const Header = styled.div`
    background-color: rgb(48,56,65);
    padding: 10px;
    width: 50.59vw;  
    display: flex;
    justify-content: space-between;
    z-index: 1;
`;

const Title = styled.h1`
    margin: 0;
    color: white;
`;

const SelectContainer = styled.div`
    padding: 5px;
    cursor: pointer;
    position: relative;
    z-index: 2;
`;
