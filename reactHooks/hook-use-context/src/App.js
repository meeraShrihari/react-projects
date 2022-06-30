import React, {useState} from "react";
import './App.css';
import CComponent from "./CComponent";
import FComponent from "./FComponent";
import {CounterContext} from "./CounterContext";

function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  }
  const decrement = () => {
    setCounter(counter - 1);
  }
  return (
    <div className="App">
      <h1>App Component</h1>
      <h2>{counter}</h2>
      <div className="btn">
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      </div>
      <hr></hr>
      <CounterContext.Provider value={{counter, setCounter}}>
        <FComponent />
        <hr></hr>
        {/* <CComponent /> */}
      </CounterContext.Provider>
    </div>
  );
}

export default App;
