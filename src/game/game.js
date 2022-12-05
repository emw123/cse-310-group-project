import firebaseData from "../firebaseData";

let i = 1;
let num = 1

function load(){ //initializes the guess and next question buttons. Called on load
    const nextButton=document.getElementById("next")
    nextButton.addEventListener("click",() => get_question(false, num, i)); //displays next question
    nextButton.textContent='Start'
    document.getElementById("guess").addEventListener("click",() => get_question(get_guess("guess",num),num,i)); //sees what guess you made
    document.getElementById("guess2").addEventListener("click",() => get_question(get_guess("guess2",num),num,i)); //^
}

function start_game(){
    //console.log(firebaseData[0]);
    i = 1
    document.getElementById('questions').innerHTML = "";
    num = Math.floor((Math.random() * 8) + 1); //makes a random number to choose country by its index
    console.log('Answer: '+firebaseData[num]['id'])
    document.getElementById('questions').innerHTML += firebaseData[num]["data"]["fact1"] + "<br />" //displays the first question as soon as you click start
    i++
    document.getElementById("next").textContent='Next'
}

function get_question(bool, num, qnum){
    if (document.getElementById('questions').innerHTML === ""){
        start_game()
    }
    else{
        if (i > 5){console.log("No more questions")} // checks how many times a question has been displayed will be 5 but for testing 3
        else{
        document.getElementById('questions').innerHTML += firebaseData[num]["data"]["fact"+qnum.toString()] + "<br />" //gets and displays question from database
        }
        i++;
    }}


function get_guess(str,num){
    var guess = document.getElementById(str).innerHTML; //finds the name of the button you clicked
    console.log('Guess: '+guess)
    var bool = check(guess,num)
    return bool;
}
function check(guess,num){
    if (guess === firebaseData[num]["id"]){ //compares name of button clicked to the name of country selected in start_game()
    console.log("you win");
    document.getElementById('questions').innerHTML = "You win, the correct answer was " + guess
    return true;
    }
    else{
        console.log("incorrect")
        return false
    }
}

export {start_game, load, check, num, get_question, i}