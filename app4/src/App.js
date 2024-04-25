import React from "react";
import { useUser} from "./components/UserContext";

function App(){
  const user = useUser();
  console.log(useUser());
  return(
    <div>
        <p>hello {user}</p>
        <h1>I'm {user}</h1>
    </div>
  )
}

export default App;