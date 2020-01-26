import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header'
import MultiForm from './MultiInput/MultiForm'
//import MultiFormCopy from './MultiInput/MultiFormCopy'
import Testing from './MultiInput/testing'


function App() {
  return (
    <div className="App">
      
      <Header/>
      {/* <MultiFormCopy/> */}
      <MultiForm/> 
      
    </div>
  );
}

export default App;
