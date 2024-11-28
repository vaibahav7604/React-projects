import React, { useState } from 'react';
import './App.css' ;
import Login from './login';

function App() {
  const [email,setemail]= useState("")
  const [password,setpassword]=useState('')

  return <div className="container">
    <Login email={email} setemail={setemail} setpassword={setpassword} password={password}/>
  </div>
}

export default App;
