import './App.css';
import TempActual from './Components/TempActual';
import MaxMin from './Components/MaxMin';
import HourlyTemp from './Components/HourlyTemp';

function App() {
  const temp = 20;
  const day = 'Lunes';
  const time = '17:00';

  const max = '29';
  const min = '13';

  return (
    <div className="Clima">
      <div className="col Main">
        <div className="temp-actual">
          <TempActual temp={temp} day={day} time={time} />
        </div>
        <div className="max-min">
          <MaxMin max={max} min={min} />
        </div>
      </div>
      <div className="col contenedor-extra">
        <div className="por-hora">
            <HourlyTemp />
        </div>
        <div className="extras">
          Extras
        </div>  
      </div>
    </div>
  );
}

export default App;
