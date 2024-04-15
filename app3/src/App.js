import './App.css';
import Weekday from './components/Weekday';
import Weekend from './components/Weekend';

function App() {
  const day = new Date().getDay();
  return (
    <div>
      {day >= 1 && day <= 5 
      ? <Weekday/> 
      : <Weekend/>}
      <h1>{day}</h1>
    </div>
  );
}

export default App;
