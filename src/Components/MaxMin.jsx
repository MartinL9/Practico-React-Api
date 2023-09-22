function MaxMin({max, min}) {
    return (
        <>
        <div className="Max">
            <p>{max}°C</p>
            <p>Máx</p>
        </div>
        <div className="Min">
            <p>{min}°C</p>
            <p>Mín</p>
        </div>
        </>
    );
}

export default MaxMin;