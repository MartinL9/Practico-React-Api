function TempActual({ temp, day, time }) {
    return (
        <>
            <p>Temperatura: {temp}°C</p>
            <p>{day}, {time}</p>
        </>
    );
}

export default TempActual;