import './App.css';
import TempActual from './Components/TempActual';
import MaxTemp from './Components/MaxTemp';
import HourlyTemp from './Components/HourlyTemp';
import WindHighlight from './Components/WindHighlight';
import UVIndexHighlight from './Components/UVIndexHighlight';
import PressureHighlight from './Components/PressureHighlight';
import HumidityHighlight from './Components/HumidityHighlight';
import VisibilityHighlight from './Components/VisibilityHighlight';
import AirQualityHighlight from './Components/AirQualityHighlight';
import MinTemp from './Components/MinTemp';

function App() {
  const temp = 20;
  const day = 'Lunes';
  const time = '17:00';

  const max = '29';
  const min = '13';

  return (
    <div className="Clima">
      <div className="Main">
        <div className="temp-actual">
          <TempActual temp={temp} day={day} time={time} />
        </div>
        <div className="max-min">
          <MaxTemp max={max} />
          <MinTemp min={min} />
        </div>
      </div>
      <div className="contenedor-extra">
        <div className="por-hora">
          <HourlyTemp />
        </div>
        <>
          <h2 className='highlight-header'>Destacados</h2>
          <div className="container-highlights">
            <UVIndexHighlight />
            <WindHighlight />
            <PressureHighlight />
            <HumidityHighlight />
            <VisibilityHighlight />
            <AirQualityHighlight />
          </div>  
        </>
      </div>
    </div>
  );
}

export default App;
