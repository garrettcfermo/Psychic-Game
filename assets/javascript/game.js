// The starting Scoreboard
let winScore = 0
let lossesScore = 0

// Possible Computer choices
const letterChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// Initial Computer Choice
let compChoice = letterChoices[Math.floor(Math.random() * 26)]

// Number of Guesses User has
let guessleft = 10

// Initial Array of Guesses Made
let guessesArr = []

document.onkeyup = function (event) {

  // Users Guess
  userGuess = event.key.toLowerCase()

  // Games Logic 
  if (userGuess === compChoice) {
    winScore++
    guessleft = 10
    guessesArr = []
    compChoice = letterChoices[Math.floor(Math.random() * 26)]
  } else {
    if (guessleft > 1 && guessleft <= 10) {
      guessleft -= 1
      guessesArr.push(userGuess)
    } else if (guessleft === 1) {
      guessleft += 9
      guessesArr = []
      compChoice = letterChoices[Math.floor(Math.random() * 26)]
      lossesScore++
    }
  }
  // Create a piece of html to display the game's results
  let html = `
<h3>Wins : ${winScore}</h3>
<h3>Losses : ${lossesScore}</h3>
<h3>Guesses Left : ${guessleft}</h3>
<h3>Your Guesses so far : ${guessesArr}</h3>
<h3> Computer Choice: ${compChoice}</h3>
`
  // Puts the html into the game div
  document.querySelector(".game").innerHTML = html

}