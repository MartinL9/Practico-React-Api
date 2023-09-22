    import React from 'react';

    function HourlyTemp() {
    const hours = [
        '1:00', '2:00', '3:00', '4:00', '5:00', '6:00','7:00', '8:00', '9:00', '10:00', '11:00', '12:00',
        '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
    ];
    const temperatures = [40, 20, 0];

    return (
        <div className="hourly-temp">
        <h2>Hoy</h2>
        <div className="temperature-column">
            {temperatures.map((temp, index) => (
            <div key={index} className="temperature-item">
                {temp}°C
            </div>
            ))}
        </div>
        <div className="hour-column" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
            {hours.map((hour) => (
            <div key={hour} className="hour-item">
                {hour}
            </div>
            ))}
        </div>
        </div>
    );
    }

    export default HourlyTemp;
