import React, { createContext, useContext, useState } from "react";

const userContext = createContext();

function App(){
  const [user, setUser] = useState('Kavindu');

  return(
    <userContext.Provider value={user}>
      <h1>Hello world</h1>
      <Compo1/>
    </userContext.Provider>
  )
}

function Compo1(){
  const user = useContext(userContext);
  return(
    <p>Hello {user}</p>
  )
}

export default App;