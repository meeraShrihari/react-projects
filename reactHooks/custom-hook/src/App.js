import React, {useState} from "react";
import './App.css';
import useCounter from "./useCounter";
import ScreenComponent from "./ScreenComponent";

function App() {
  const [counter, increment, decrement, reset] = useCounter(0);
  return (
    <div className="App border">
      <h1>Custom hook examples</h1>
      <h2>{counter}</h2>
      <div className="btns">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
      <ScreenComponent />
    </div>
  );
}

export default App;
