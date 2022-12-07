export default function Sidebar() {
  return (
    <div className='Sidebar'>
        <nav>
            <h1 className='title'>Geography Game</h1>
        </nav>
        <div className='sidebarText'>
            <button id='next'></button>
            <p id='instructions'>You have up to 5 guesses to click on the correct country! You will get a new hint between each guess. Good luck!</p>
            <p id='questions'></p>
        </div>

    </div>
  )
}