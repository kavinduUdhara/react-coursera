import React, {useRef, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const inputRef = useRef(null);
  const [inputVal, setInputVal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const inputValue = inputRef.current.value;
    console.log(inputValue);
    setInputVal("");
  }
  const handleChange = (e) => {
    e.preventDefault();
    setInputVal(inputRef.current.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' ref={inputRef} onChange={handleChange} value={inputVal}/>
        <input type='submit' disabled={!inputVal}/>
      </form>
      <h2>{inputVal}</h2>
    </div>
  );
}

export default App;
