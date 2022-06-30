import React, {useState} from "react";
import './App.css';

function App() {
  //let a = "Meera";
  const [counter, setCounter] = useState(1);
  const result = factorial(counter);
  const [name, setName] = 
  return (
    <div className="App">
      <h1>Factorial of {counter} is: <span>{result}</span></h1>
      <div>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </div>
    </div>
  );
}

export default App;
