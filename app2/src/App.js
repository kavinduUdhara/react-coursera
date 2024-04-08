import './App.css';
import Child from './components/Child';

let data = {
  heading : "99% off all items",
  callToAction: "Everything must go",
}

function App() {
  const date = new Date();
  return (
    <div>
      <Child message={date.toLocaleTimeString()}/>
    </div>
  );
}

export default App;
