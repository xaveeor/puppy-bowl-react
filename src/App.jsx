import { useState, useEffect } from 'react'
import {Routes, Route, Link, useParams } from "react-router-dom"
import  NewPlayerForm from './components/NewPlayerForm'
import  AllPlayers from './components/AllPlayers'
import './App.css'
import SinglePlayer from './components/SinglePlayer';







function App() {
 
  const { playersId } = useParams();


  return (
    <>
    <h1>Puppy Bowl React</h1>
    <div id="navbar">
        <Link to={'form'}> Add Player Form</Link>
        <Link to={'playerlist'}> Player List</Link>
        </div>

      <div> 
      
        <Routes>
        <Route path ="/" element={<div>Hello</div>} />
        <Route path ="/form" element={<NewPlayerForm/>} />
        <Route path ="/playerlist" element={<AllPlayers/>} />
        <Route path ="/playerlist/:playersId" element = {<SinglePlayer/>} />
        </Routes>

  

      
      
      </div>
      
    </>
  )
}

export default App
