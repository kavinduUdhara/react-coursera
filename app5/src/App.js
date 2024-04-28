import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [toogle, setToogle] = useState(true);

  function chlickHandler(){
    setToogle(!toogle);
  }

  useEffect(() => {
    document.title = toogle ? "Welcome to the app" : "Using the useEffect hook";
  }, [toogle]);
  return (
    <div>
      <h1>Using useEffect hook</h1>
      <button onClick={chlickHandler}>
        click me!
      </button>
      {!toogle && <h2>Welocme to little lemon!</h2>}
    </div>
  );
}

export default App;
