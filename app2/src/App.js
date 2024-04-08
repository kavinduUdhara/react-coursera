import './App.css';
import Promo from './components/Promo';

let data = {
  heading : "99% off all items",
  callToAction: "Everything must go",
}

function App() {
  return (
    <div>
      <Promo
        heading = {data.heading}
        callToAction = {data.callToAction}
      />
    </div>
  );
}

export default App;
