import React from 'react'
import './FormSection.css'
import { app } from '../../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';


export const FormSection = () => {
    let auth = getAuth();
    const [data, setData] = useState({});
    const handleInput = (event) => {
        let newInput = { [event.target.name]: event.target.value};
    
        setData({ ...data, ...newInput });
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth,data.email,data.password)
        .then((response) => {
            console.log(response.user)
        })
        .catch((err) => {
            console.log(err.message)
        })
    };



  return (
    <div className='FormSection'>
        <div>
            
    <form className="form">
       <p className="form-title">Sign in to your account</p>
        <div className="input-container">
          <input name="email" placeholder="Enter email" onChange={(event) =>handleInput(event)}/>
          <span>
          </span>
      </div>
      <div className="input-container">
          <input name="password" placeholder="Enter password" onChange={(event) =>handleInput(event)}/>
        </div>
         <button type="submit" className="submit" onClick={handleSubmit}>
        Sign in
      </button>

      <p className="signup-link">
        No account?
        <a href="">Sign up</a>
      </p>
   </form>

        </div>
    </div>
  )
}
