
import React, {useState} from 'react';


function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Increament the counter</h1>
      <p>{counter}</p>
      <button onClick={() => {
        setCounter(counter + 1);
      }}>Increment Counter</button>
    </div>
  );
}

export default App;
