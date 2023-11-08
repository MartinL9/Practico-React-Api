    import { useRef, useState, useEffect } from 'react';
    import L from 'leaflet';
    import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
    import styled from 'styled-components';
    import '../../Styles/LoadingStyles.css'

    // Cambio de IconMarker y estilos del elemento
    const customIcon = new L.Icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/9249/9249341.png',
        iconSize: [45, 45],
    });

    function MapTransport({ transportData, selectedLine }) {
        const [isLoading, setIsLoading] = useState(true);
        const mapRef = useRef(null);

        const startLoadingTimeout = () => {
            return setTimeout(() => {
                setIsLoading(false);
            }, 15000);
        };
    
        useEffect(() => {
            setIsLoading(true);
            const loadingTimeout = startLoadingTimeout();
    
            return () => {
                clearTimeout(loadingTimeout);
            };
        }, []);

        useEffect(() => {
            if (mapRef.current) {
                const centerAndZoom = calculateCenterAndZoom(transportData);
                mapRef.current.setView(centerAndZoom.center, centerAndZoom.zoom);
            }
        }, [transportData]);

        if (!isLoading) {
            if (!transportData || !Array.isArray(transportData)) {
                return (
                    <>
                        <ImgContainer src='https://cdn-icons-png.flaticon.com/512/8182/8182827.png' alt='API icon'></ImgContainer>
                        <LoadingText>No se pudo alcanzar la API.</LoadingText>
                    </>
                );
            }
        }

        if (!transportData || !Array.isArray(transportData)) {
            return <div className="classic-2"></div>;
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
            } else {
                const latZoom = Math.floor(Math.log2(360 / maxLatDistance)) - 1;
                const lngZoom = Math.floor(Math.log2(360 / maxLngDistance)) - 1;
                zoom = Math.min(latZoom, lngZoom);
            }

            return {
                center: [centerLat, centerLng],
                zoom: zoom,
            };
        }
        
        return (
            <div>
                <MapContainerStyled 
                    center={[-34.635376640219384, -58.534557284064064]}
                    zoom={11} 
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
                                    <p>Velocidad: {`${(item.speed * 3.6).toFixed(2)} km/h`}</p>
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

    const ImgContainer = styled.img`
        margin: 0 auto; 
        display: block;
    `

    const LoadingText = styled.p`
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;      
        color: white;         
    `;