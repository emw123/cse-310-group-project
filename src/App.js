import React, {useEffect} from 'react'
import './App.css'
import {load} from './game/game.js'
import Sidebar from './components/Sidebar'
import Map from './components/Map'

export default function App() { //app component
  useEffect(()=>load(), []) //calls load function once with useEffect hook
  
  return (
    <div className='App'> {/* app container */}
      <Sidebar/> {/* render sidebar */}
      <Map/> {/* render map */}
    </div>
  )
}