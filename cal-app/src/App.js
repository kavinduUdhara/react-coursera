import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);
    setResult((result) => result + inputValue);
    resetInput();
  }

  function minus(e) {
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);
    setResult((result) => result - inputValue);
    resetInput();
  }

  function times(e) {
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);
    setResult((result) => result * inputValue);
    resetInput();
  }

  function divide(e) {
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);
    if (inputValue !== 0) {
      setResult((result) => result / inputValue);
    } else {
      alert("Cannot divide by zero");
    }
    resetInput();
  }

  function resetInput() {
    inputRef.current.value = "";
  }

  function resetResult() {
    setResult(0);
    resetInput();
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button>
      </form>
    </div>
  );
}

export default App;
