import './App.css';
import {useForm} from "react-hook-form";
import { useState } from 'react';

function App() {
  const {register, handleSubmit, formState} = useForm();
  const [userInfo, setUserInfo] = useState();
  const onSubmit = (data) => {
    setUserInfo(data);
    console.log(data);
  }
  console.log(formState.errors);
  return (
    <div className="container">
      <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Registration Form</h1>
        <div className='ui divider'></div>
        <div className='ui form'>
          <div className='field'>
            <label>Username</label>
            <input 
              type="text" 
              name="username" 
              placeholder='Username' 
              {...register("username", {required: "Username is required"})}
            />
          </div>
          {formState?.errors?.username && (
            <p>{formState.errors.username.message}</p>
          )}
          <div className='field'>
            <label>Email</label>
            <input 
              type="email" 
              name="email" 
              placeholder='Email' 
              {...register("email", {
                required: "Email is required", 
                pattern: {
                  value: /^\S+@\S+$/i, 
                  message: "This is not a valid email"
                }
              })}
            />
          </div>
          {formState?.errors?.email && (
            <p>{formState.errors.email.message}</p>
          )}
          <div className='field'>
            <label>Password</label>
            <input 
              type="password" 
              name="password" 
              placeholder='Password' 
              {...register("password", {
                required: "Password is required", 
                minLength: {
                  value:4, 
                  message:"Password should be more than 4 characters"
                },
                maxLength: {
                  value:10, 
                  message:"Password cannot exceed more than 10 characters"
                }
              })}
            />
          </div>
          {formState?.errors?.password && (
            <p>{formState.errors.password.message}</p>
          )}
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
