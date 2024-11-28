import React, { useState } from 'react'
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreManu from '../../components/ExploreManu/ExploreManu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from './AppDownload';
function Home() {
  const[category ,setcategory]=useState("All");
  return (
    <div >
        <Header/>
        <ExploreManu category={category} setcategory={setcategory} />
        <FoodDisplay category={category}/>
        <AppDownload/>
    </div>
  )
}

export default Home