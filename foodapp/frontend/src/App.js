import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/Placeorder/PlaceOrder';
import Footer from './pages/Footer/Footer';
import Login from './pages/User/Login';
import Signup from './pages/User/Signup';

//import Loginpop from './components/Header/Loginpop';
/*{showlogin?<Loginpop setlogin={setlogin}/>:<></>}
setlogin={setlogin}const[showlogin, setlogin]=useState(false);*/
function App() {

  return (
    <div className='app'>
      <Navbar />
      <Routes>
      <Route path='/Login'element={<Login/>}/>
      <Route path='/Signup'element={<Signup/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/PlaceOrder' element={<PlaceOrder/>}/>
      </Routes>
    <Footer/>
    </div>
    
  )
}

export default App