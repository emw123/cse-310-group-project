export default function Sidebar() { //sidebar component
  return (
    <div className='Sidebar'> {/* sidebar container */}
        <nav>
            <h1 className='title'>Geography Game</h1> {/* title */}
        </nav>
        <div className='sidebarText'> {/* button and text content */}
            <button id='next'></button> {/* start/next button */}
            <p id='instructions'> {/* instructions at start, disappear after button is clicked */}
              You have up to 5 guesses to click on the correct country! 
              You will get a new hint between each guess. Good luck!</p>
            <p id='questions'></p> {/* empty p tag to populate questions with */}
        </div>
    </div>
  )
}