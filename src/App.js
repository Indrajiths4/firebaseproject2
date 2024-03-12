import './App.css';
import React , {useState,useEffect} from 'react';
import {BrowserRouter,Routes} from 'react-dom'
import { Hero } from './components/Hero/Hero';
import { NavBar } from './components/NavBar/NavBar';
import { SecondSection } from './components/SecondSection/SecondSection';
import { ThirdSection } from './components/ThirdSection/ThirdSection';
import { FourthSection } from './components/FourthSection/FourthSection';
import { FifthSection } from './components/FifthSection/FifthSection';
import { FormSection } from './components/FormSection/FormSection';
import { FirebaseTest } from './components/FirebaseTest/FirebaseTest';
function App() {
  const [loading,setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 4000)
  // }, [])
  return (
    
    <div>
      {
        loading ?
         <div class="wrapper">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
    </div> : 
      
      <><NavBar /><Hero /><SecondSection /><ThirdSection /><FourthSection /><FifthSection /> <FormSection/> <FirebaseTest /></> } 
    </div> 
  );
}

export default App;
