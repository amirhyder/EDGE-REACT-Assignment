import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useRef } from 'react';

function App() {

  const[name,setName]=useState('');
  const prevName=useRef('');

  useEffect(()=>{
    prevName.current=name;
  },[name])

  return (
    <div className="App">
      
      <input value={name} onChange={e=> setName(e.target.value)}/>
      <p>My name is:  {name} and My prevous name is:  {prevName.current}</p>
    </div>
  );
}

export default App;
