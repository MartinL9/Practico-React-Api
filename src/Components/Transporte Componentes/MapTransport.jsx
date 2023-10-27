import { useRef } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import styled from 'styled-components';

// Cambio de IconMarker y estilos del elemento
const customIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/9249/9249341.png',
    iconSize: [45, 45],
});

function MapTransport({ transportData, selectedLine }) {
    const mapRef = useRef(null);

    if (!transportData || !Array.isArray(transportData)) {
        return <p>Cargando datos de transporte...</p>;
    }

    const filteredData = transportData.filter((item) => {
        return !selectedLine || item.route_id === selectedLine;
    }); 

    function calculateCenterAndZoom(data) {
        if (data.length === 0) {
            return {
                center: [-34.635376640219384, -58.534557284064064],
                zoom: 11,
            };
        }
        
        let minLat = data[0].latitude;
        let maxLat = data[0].latitude;
        let minLng = data[0].longitude;
        let maxLng = data[0].longitude;

        data.forEach((item) => {
            if (item.latitude < minLat) {
                minLat = item.latitude;
            }
            if (item.latitude > maxLat) {
                maxLat = item.latitude;
            }
            if (item.longitude < minLng) {
                minLng = item.longitude;
            }
            if (item.longitude > maxLng) {
                maxLng = item.longitude;
            }
        });

        const centerLat = (minLat + maxLat) / 2;
        const centerLng = (minLng + maxLng) / 2;

        const maxLatDistance = maxLat - minLat;
        const maxLngDistance = maxLng - minLng;

        let zoom = 11;

        if (maxLatDistance <= 0.1 || maxLngDistance <= 0.1) {
            zoom = 13;
        }

        return {
            center: [centerLat, centerLng],
            zoom: zoom,
        };
    }

    return (
        <div>
            <MapContainerStyled 
                center={
                    filteredData.length > 0 
                    ? calculateCenterAndZoom(filteredData).center 
                    : [-34.635376640219384, -58.534557284064064]
                } 
                zoom={
                    filteredData.length > 0 
                    ? calculateCenterAndZoom(filteredData).zoom 
                    : 11
                } 
                scrollWheelZoom={true} 
                ref={mapRef}
            >
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {filteredData.map((item, index) => (
                        <Marker position={[item.latitude, item.longitude]} icon={customIcon} key={index}>                            
                            <Popup>
                                <p>Agencia: {item.agency_name}</p>
                                <p>Línea: {item.route_short_name}</p>
                                <p>Destino: {item.trip_headsign}</p>
                                <p>ID Ruta: {item.route_id}</p>
                            </Popup>
                        </Marker>
                ))}
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