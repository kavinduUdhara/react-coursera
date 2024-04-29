import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type == 'buy_in') return {money: state.money - 10};
  if (action.type = "sell_out") return {money: state.money + 10};
  return state;
}

function App() {
  const initState = {money: 100};
  const [state, dispatch] = useReducer(reducer, initState)
  return (
    <div className="App">
      <h1>Wallet: {state.money}</h1>
      <div>
        <button onClick={() => {dispatch({type: "buy_in"})}}>go shopping!</button>
        <button onClick={() => {dispatch({type: "sell_out"})}}>serve meal to the sustomer</button>
      </div>
    </div>
  );
}

export default App;
