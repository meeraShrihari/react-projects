import {useState, useEffect} from "react";
import Menu from "./component/Menu";
import './App.css';

function App() {
  const initialValues = {username: "", email: "", password: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    // console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, formValues, isSubmit])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  const reset = () => {
    setFormValues(initialValues);
  }

  return (
    <div>
      <div className="result">
      {
        Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="success" data-testid="success">Signed in successfully!</div>
        )  : (
          <pre className="not-success">{JSON.stringify(formValues, undefined, 2)}</pre>
        )
      }
      </div>
      <div className="container">
        <h1>This is React Testing Tutorial</h1>
        <form onSubmit={handleSubmit}>
          <h1>Login Form</h1>
          <div className='fields'>
            <div className='field'>
              <label style={{textAlign: "left"}}>Username</label>
              <input 
                type="text" 
                name="username" 
                placeholder='Username' 
                value={formValues.username}
                onChange={handleChange}
              />
            </div>
            <p style={{color: "red"}}>{formErrors.username}</p>
            <div className='field'>
              <label style={{textAlign: "left"}}>Email</label>
              <input 
                type="email" 
                name="email" 
                placeholder='Email' 
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p style={{color: "red"}}>{formErrors.email}</p>
            <div className='field'>
              <label style={{textAlign: "left"}}>Password</label>
              <input 
                type="password" 
                name="password" 
                placeholder='Password' 
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p style={{color: "red"}}>{formErrors.password}</p>
            <button className='submit' data-testid="submit">Submit</button>
          </div>
        </form>
        <button className='submit' data-testid="reset" onClick={reset}>Reset</button>
      </div>
      <Menu />
    </div>
  );
}

export const validate = (values) => {
  const errors = {};
  const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i;
  if(!values.username) {
    errors.username = "Username is required!";
  }
  if(!values.email) {
    errors.email = "Email is required!";
  }else if(!regex.test(values.email)) {
    errors.email = "This is not a valid email format!"
  }
  if(!values.password) {
    errors.password = "Password is required!";
  }else if(values.password.length <= 4) {
    errors.password = "Password should be more that 4 characters!";
  }else if(values.password.length > 10) {
    errors.password = "Password should not exceed more than 10 characters!";
  }
  return errors;
}

export default App;
