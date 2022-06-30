import './styles.css';
import { useState } from 'react';

function App() {

  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ['/','*','+','-','.'];

  const updateCalc = value => {
    if(
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1))
    ) {
      return;
    }
    setCalc(calc + value);
    if(!ops.includes(value)) {
      console.log(calc);
      setResult(eval(calc+value).toString());
    }
  }

  const createDigits = () => {
    const digits = [];
    for(let i=1; i<10; i++) {
      digits.push(
        <button  onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      )
    }
    return digits;
  }

  const updateEquals = () => {
    setCalc(result);
  }

  const deleteCalc = () => {
    var res = calc.slice(0,calc.length-1);
    console.log(res);
    setCalc(res);
    setResult(res);
  }
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ''} {calc || "0"}
        </div>
        <div className="operators">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={() => deleteCalc()}>DEL</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={() => updateEquals()}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App;