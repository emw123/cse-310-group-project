import React from 'react'

function Sidebar() {
  return (
    <div className='sidebar'>
        <nav>
            <h1 className='title'>Geography Game</h1>
        </nav>
        <div className='sidebarText'>
            <p id='questions'></p>

            <button id='start'>Start</button>
            <button id='next'>Next</button>
            <button id='guess'>USA</button>
            <button id='guess2'>Mexico</button>
        </div>
        
    </div>
  );
}

export default Sidebar;
