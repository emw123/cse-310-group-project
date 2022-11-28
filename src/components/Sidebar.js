import React from 'react'

function Sidebar(props) {
  return (
    <div className='Sidebar'>
        <nav>
            <h1 className='title'>Geography Game</h1>
        </nav>
        <div className='sidebarText'>
            <button id='next'></button>
            <button id='guess'>unitedstates</button>
            <button id='guess2'>mexico</button>

            <p id='questions'></p>
            <p id='country'>{props.country}</p>
        </div>

    </div>
  );
}

export default Sidebar;
