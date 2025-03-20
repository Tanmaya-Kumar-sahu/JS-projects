let randomNumber =parseInt(Math.random()*100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaning = document.querySelector('.lastResult')
const lowhigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playgame = true

if (playgame) {
    submit.addEventListener('click' , function(e){
        e.preventDefault()
       const guess = parseInt(userInput.value)
       validetGuess(guess)
    })
}

function validetGuess(guess){
    //check the number
    if (isNaN(guess)) {
        alert('please enter a valid number')
    }else if(guess<1){
        alert('please enter a number greater than 1')
    }else if (guess>100) {
        alert('Please enter a number less than 100')
    }else{
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over . random number was ${randomNumber}`)
            endgame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if (guess === randomNumber) {
        displayMessage(`CONGRATULATION ! You guessed it right`)
        endgame()
    }else if (guess<randomNumber) {
        displayMessage(`OOPS ! Number is too low`)
    }else if (guess>randomNumber) {
        displayMessage(`Number is too high`)
    }
}

function displayMessage(message){
   lowhigh.innerHTML = `<h4>${message}</h4>`
}

function displayGuess(guess){
    userInput.value =''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaning.innerHTML = `${11-numGuess}`
}


function newGame(){
  const newGameButton =document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(e){
     randomNumber =parseInt(Math.random()*100 + 1);
     prevGuess =[]
     numGuess = 1
     guessSlot.innerHTML = ''
     remaning.innerHTML = `${11-numGuess}`
     userInput.removeAttribute('disabled');
     startOver.removeChild(p);
  })
}

function endgame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    p.style.cursor = 'pointer'
    startOver.appendChild(p)
    playgame= false
    newGame()
}