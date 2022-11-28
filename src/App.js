import React, {useState, useEffect} from 'react'

import db from "./firebase"

import './App.css'

import game, {load} from './game/game.js'

import Sidebar from './components/Sidebar'
import Map from './components/Map'

function App() {
  const [country, setCountry] = useState("");
  useEffect(()=>load(), [])

  return (
    <div className='App'>
      <Sidebar country={country}/>
      <Map setCountry={setCountry}/>
    </div>
  );
}

export default App;

