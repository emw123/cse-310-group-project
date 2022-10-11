import start_game from '../game/game.js'

function Sidebar() {
  return (
    <div className='sidebar'>
        <nav>
            <h1 className='title'>Geography Game</h1>
        </nav>
        <div className='sidebarText'>
            <p id='questions'></p>
            <p id='guess'></p>
            <p id='guess2'></p>
            <p id='next'></p>
            <button onClick={start_game}>Start</button>
        </div>
        
    </div>
  );
}

export default Sidebar;
