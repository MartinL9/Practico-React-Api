    import React from 'react';
    import TempActual from './TempActual';
    import MaxTemp from './MaxTemp';
    import HourlyTemp from './HourlyTemp';
    import WindHighlight from './WindHighlight';
    import UVIndexHighlight from './UVIndexHighlight';
    import PressureHighlight from './PressureHighlight';
    import HumidityHighlight from './HumidityHighlight';
    import VisibilityHighlight from './VisibilityHighlight';
    import PrecipitationHighlight from './PrecipitationHighlight';
    import MinTemp from './MinTemp';

    function Clima(props) {
        const { dailyTemp, maxMinT, highlightValues } = props;

        return (
            <div className='clima'>
                <div className="Main">
                    <div className="temp-actual">
                        <TempActual temp={dailyTemp.temp} day={dailyTemp.day} time={dailyTemp.time} weathercode={dailyTemp.weatherCode} />
                    </div>
                    <div className="max-min">
                        <MaxTemp max={maxMinT.maxT} />
                        <MinTemp min={maxMinT.minT} />
                    </div>
                </div>
                <div className="container-extra">
                    <div className="por-hora">
                        <HourlyTemp tempHour={highlightValues.tempHour}/>
                    </div>
                    <>
                        <h2 className='highlight-header'>Destacados</h2>
                        <div className='container-highlights'>
                            <UVIndexHighlight uvIndex={highlightValues.uvIndex} />
                            <WindHighlight wind={highlightValues.wind} windDirection={highlightValues.windDirection}/>
                            <PressureHighlight pressure={highlightValues.pressure} />
                            <HumidityHighlight humidity={highlightValues.humidity} />
                            <VisibilityHighlight visibility={highlightValues.visibility} />
                            <PrecipitationHighlight precipitation={highlightValues.precipitation} />
                        </div>  
                    </>
                </div>
            </div>
        )
    }


    export default Clima;