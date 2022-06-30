import React, {useState} from "react";
import './App.css';

function App() {
  const [name, setName] = useState("Meera");
  function changeName() {
    console.log("clicked");
    
    return setName("Hellow")
  }
  return (
    <div className="App">
      <div>Hello, {name}</div>
      <button onClick={changeName}>Click</button>
    </div>
  );
}

export default App;
