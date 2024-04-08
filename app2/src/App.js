import React, {useState} from 'react';
import './App.css';
import Child from './components/Child';
import Promo from './components/Promo';

let data = {
  heading : "99% off all items",
  callToAction: "Everything must go",
}

//const [state, setState] = useState(initialState);
//const [showMenu, setShowMenu] = useState(false);


function App() {

  const [inputText, setText] = useState('hello'); 
  function handleChange(e) {
    setText(e.target.value); 
  }

  const date = new Date();

  return (
    <div>
      <p><u>Parent children data flow</u></p>
      <Promo 
        heading = {data.heading}
        callToAction = {data.callToAction}
        />
      <p><u>prop data and state data</u></p>
      <Child message={date.toLocaleTimeString()}/>
      <p><u>Hooks</u></p>
      <input value={inputText} onChange={handleChange} /> 
      <p>You typed: {inputText}</p> 
      <button onClick={() => setText('hello')}> 
        Reset 
      </button> 
    </div>
  );
}

export default App;
