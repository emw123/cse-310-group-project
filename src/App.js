import React, {useState, useEffect} from 'react'

import db from "./firebase"

import './App.css'

import game, {load} from './game/game.js'

import Sidebar from './components/Sidebar'
import Map from './components/Map'

function App() {
  const [country, setCountry] = useState("");
  useEffect(()=>{
    db.collection("country").onSnapshot((snapshot) => {
      console.log(snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      })))
      setCountry(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    console.log("test");
    console.log();
    load();
  }, [])

  const submit = (e) => {
    e.preventDefault();
    console.log(country[0]["data"]["fact1"]);
    // db.collection("country").onSnapshot((snapshot) => {
    // console.log(snapshot.docs.map((doc) => ({
    //   id: doc.id,
    //   data: doc.data(),
    // })))})
    // db.collection("country").get({
    //   name: country
    // });
  
    //setCountry(country);
  };
  return (
    <div className='App'>
      <Sidebar/>
      <Map/>
      <input
          type="text"
          placeholder="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      <button onClick={submit}>Submit</button>
    </div>
    
  );
}

export default App;

