import React, {useEffect} from 'react'

import './App.css'

import game, {load} from './game/game.js'

import Sidebar from './components/Sidebar'
import Map from './components/Map'

function App() {
  useEffect(()=> load(), [])
  return (
    <div className='App'>
      <Sidebar/>
      <Map/>
    </div>
  );
}

export default App;
