import React from 'react'
import './FormSection.css'
import { app } from '../../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';


export const FormSection = () => {
    let auth = getAuth();
    const [data, setData] = useState({});
    const handleInput = (event) => {
        let newInput = { [event.target.name]: event.target.value};
    
        setData({ ...data, ...newInput });
    };
    
    const handleSignin = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth,data.email,data.password)
        .then((response) => {
            console.log("Successfully Logged in")
        })
        .catch((err) => {
            console.log(err.message)
        })
    };
    const handleSignup = (event) => {
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
       <p className="form-title">Signin to your account</p>
        <div className="input-container">
          <input name="email" placeholder="Enter email" onChange={(event) =>handleInput(event)}/>
          <span>
          </span>
      </div>
      <div className="input-container">
          <input name="password" placeholder="Enter password" onChange={(event) =>handleInput(event)}/>
        </div>
         <button type="submit" className="submit" onClick={handleSignin}>
        Sign in
      </button>
      <button type="submit" className="submit" onClick={handleSignup}>
        Sign up
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
