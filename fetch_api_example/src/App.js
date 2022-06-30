import React, {useEffect, useState} from 'react';

function App() {

  const [userData, setUserData] = useState([]);
  /*
  useEffect(() => {
    fetch(`https://randomuser.me/api`)
    .then(response => response.json())
    .then(data => {
      setUserData(data);
    })
  }, [])
*/
  const handleClick = function() {
    return fetch(`https://randomuser.me/api/`)
    .then(response => response.json())
    .then(data => {
      setUserData(data.results);
      //console.log(data.results);
    })
  }

  return (
    <div>
      <h1> Data of Users </h1>
      {
        userData.map((data, idx) => {
          console.log(data)
          return <div key={idx}>
            <label>Name : </label> <label>{data.name.first}</label><br />
            <label>Email  : </label> <label>{data.email}</label>
            <img src={data.picture.medium} alt={data.name.first}></img>
          </div>
        })
      }
      <button style={{color: 'red'}} onClick={handleClick}>Click Me</button>
    </div>
  )  
}

export default App;
