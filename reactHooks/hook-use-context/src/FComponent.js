import React, {useContext} from "react";
import { CounterContext } from "./CounterContext";

const FComponent = () => {
    const {counter, setCounter} = useContext(CounterContext);
    return (
        <div className="border compo">
            <h1>Function Component</h1>
            <h2 style={{marginLeft: "40px"}}>{counter}</h2>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
            <hr></hr>
            <Fchild counter={counter}/>
        </div>
    );
}

const Fchild = () => {
    const {counter, setCounter} = useContext(CounterContext);
    return (
        <div className="border fcompo">
            <h1>Function child component</h1>
            <h2>{counter}</h2>
            <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        </div>
    );
};

export default FComponent;