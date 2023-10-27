    import { useState, useEffect } from "react";
    import styled from "styled-components";
    import Select from 'react-select';
    import DatosTransporte from '../../DatosTransporte.json';

    const customStyles = {
        control: (provided) => ({
            ...provided,
            background: 'white',
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? '#C0C0C0' : 'transparent',
            color: state.isFocused ? 'blue' : 'black',
        }),
        singleValue: (provided) => ({
            ...provided,
            color: 'blue',
        }),
    };
    
    const tripHeadsignToRouteIdMap = {};

    function SelectTransport({ setSelectedLine }) {
        const [inputValue, setInputValue] = useState('');
        const [selectedOption, setselectedOption] = useState("");
        const [tripHeadsignOptions, setTripHeadsignOptions] = useState([]);

        useEffect(() => {
            if (DatosTransporte.length > 0) {
                if (Object.keys(tripHeadsignToRouteIdMap).length === 0) {
                    DatosTransporte.forEach((item) => {
                        tripHeadsignToRouteIdMap[item.trip_headsign] = item.route_id;
                    });
                }

                const uniqueTripHeadsigns = [
                    ...new Set(DatosTransporte.map((item) => item.trip_headsign)),
                ];
            
                const tripHeadsignOptionsFormatted = uniqueTripHeadsigns.map((item) => ({
                    value: item,
                    label: item,
                }));

                setTripHeadsignOptions(tripHeadsignOptionsFormatted);
                }
        }, []);

        const handleTripHeadsignChange = (selectedOption) => {
            setselectedOption(selectedOption);
            if (selectedOption) {
                const routeId = tripHeadsignToRouteIdMap[selectedOption.value];
                setSelectedLine(routeId);
            } else {
                setSelectedLine('');
            }
        };

        return (
            <Header>
                    <Title>Colectivos</Title>
                    <SelectContainer>
                        <Select
                            value={selectedOption}
                            onChange={handleTripHeadsignChange}
                            onInputChange={input => setInputValue(input.toUpperCase())}
                            inputValue={inputValue}
                            options={tripHeadsignOptions}
                            placeholder="Seleccione una Linea"
                            styles={customStyles}
                        />
                    </SelectContainer>
                </Header>
        )
    }

    export default SelectTransport;

    // Styles
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