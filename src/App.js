import React, {useState, useEffect} from 'react'
import './App.css'
import {load} from './game/game.js'
import Sidebar from './components/Sidebar'
import Map from './components/Map'

export default function App() {
  useEffect(()=>load(), [])

  const [country, setCountry] = useState('')
  
  return (
    <div className='App'>
      <Sidebar country={country}/>
      <Map setCountry={setCountry}/>
    </div>
  )
}