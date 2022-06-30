import React, { useState } from "react";
import {useForm} from "react-hook-form";
import { useUserContext } from "../context/userContext";
import "./login.css";

const LoginForm = () => {
    const {register, handleSubmit, formState} = useForm();
    const {login} = useUserContext();
    const onSubmitFn = (data) => {
        login(data.username);
    }
    return (
        <div className="containerLogin">
            <form onSubmit={handleSubmit(onSubmitFn)}>
                <h1>Registration Form</h1>
                <div className="ui divider"></div>
                <div className="ui form">
                    <div className="field">
                        <label>Username</label>
                        <input 
                            type="text" 
                            name="username" 
                            placeholder="Username" 
                            {...register("username", {required: "Username is required"})}
                        />
                    </div>
                    {
                        formState?.errors?.username &&
                        (<p>{formState.errors.username.message}</p>)
                    }
                    <div className="field">
                        <label>Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email"
                            {...register("email", {required: "Email is required", pattern: {value: /^\S+@\S+$/i, message: "This is not a valid email"}})}
                        />
                    </div>
                    {
                        formState?.errors?.email &&
                        (<p>{formState.errors.email.message}</p>)
                    }
                    <div className="field">
                        <label>Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password"
                            {...register(
                                "password", 
                                {
                                    required: "Password is required", 
                                    minLength: {
                                        value: 4, 
                                        message: "Password must be more than 4 characters"
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: "Password cannot exceed more than 10 characters"
                                    }
                                }
                            )}
                        />
                    </div>
                    {
                        formState?.errors?.password &&
                        (<p>{formState.errors.password.message}</p>)
                    }
                    <button className="fluid ui button blue">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;