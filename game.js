data = {
    1:{
        Name: "USA",
        id: 1,
        1:"qestion 1-1",
        2:"qestion 1-2",
        3:"qestion 1-3"
    },
    2:{
        Name: "Mexico",
        id: 2,
        1:"qestion 2-1",
        2:"qestion 2-2",
        3:"qestion 2-3"
    }}
let i = 1;
let win = false;
function start_game(){
    if (win == true){
        console.log("end")
        return false
    }
    i = 1
    document.getElementById('questions').innerHTML = "";
    let num = Math.floor((Math.random() * 2) + 1); //makes a random number to choose country by its index
    console.log('Answer: '+data[num]['Name'])

    document.getElementById("next").addEventListener("click",() => get_question(num, i));
    document.getElementById("guess").addEventListener("click",() => get_guess("guess",num));
    document.getElementById("guess2").addEventListener("click",() => get_guess("guess2",num));
    
    }
function get_question(num, qnum){
    document.getElementById('questions').innerHTML += data[num][qnum] + "<br />"
    console.log(data[num][qnum])
    if (i < 3){
        i++;
    }
}
function get_guess(str,num){
    var guess = document.getElementById(str).value;
    console.log('Guess: '+guess)
    check(guess,num)
}
function check(guess,num){
    if (guess == data[num]['Name']){
    console.log("you win");
    win = true;
    }
    else{
        console.log("incorrect")
    }
}