import React, {useState, useReducer} from "react";
import './App.css';

const initialState = [{
  id: Date.now(),
  name: "Meera",
  email: "meera.shrihari@yahoo.com"
}];
function reducer(state, action) {
  switch(action.type) {
    case "add" :
      return [...state, action.payload];
    case "delete" :
      return state.filter(contact => {
        return contact.id !== action.payload.id;
      });
    default : 
      throw new Error();
  }
}

function App() {
  // const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // const increment = () => {
  //   setCounter(counter + 1);
  // };

  // const decrement = () => {
  //   setCounter(counter - 1);
  // }

  const addContact = (e) => {
    e.preventDefault();
    const contact = {
      id: Date.now(),
      name: name,
      email: email
    }
    setName("");
    setEmail("");
    dispatch({type: "add", payload: contact})
  }

  return (
    <div className="App border">
      <h1>useReducer Hook</h1>
      <form onSubmit={(e) => addContact(e)}>
        <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <div>
          <button>Add Contact</button>
        </div>
      </form>
      <div>
        <ul>
          {
            state.map(contact => {
              return(
              <li key={contact.id}>
                <div className="contact">
                  <h2>{contact.name}</h2>
                  <h3>{contact.email}</h3>
                </div>
                <div className="deleteBtn">
                  <button onClick={() => dispatch({type: "delete", payload: {id: contact.id}})}>Delete</button>
                </div>
              </li>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
