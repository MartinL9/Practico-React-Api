import { useState } from "react";
import SelectTransport from "./SelectTransport";
import MapTransport from "./MapTransport";
import TripInfo from "./TripInfo";

function Transport(props) {
    const {transportData, selectedLine, setSelectedLine} = props;
    const [isTripInfoVisible, setTripInfoVisible] = useState(false);

    const handleSelectedLineChange = (newSelectedLine) => {
        setSelectedLine(newSelectedLine);

        // Si se selecciona una línea, muestra TripInfo
        setTripInfoVisible(!!newSelectedLine);
    };

    return (
        <div>
            <SelectTransport setSelectedLine={handleSelectedLineChange}/>
            <MapTransport transportData={transportData} selectedLine={selectedLine}/>
            {isTripInfoVisible && (
                <TripInfo selectedTripInfo={transportData} />
            )}
        </div>
    )
}

export default Transport;