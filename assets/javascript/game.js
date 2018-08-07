

// The starting points of Scores
let winScore = 0
let lossesScore = 0

// Possible choices
const letterChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// Number of Guesses User has
let guessleft = 10


document.onkeyup = function (event) {

  // Your Choice
  userChoice = event.key

  // Decreases guessleft after guess is made
  if(guessleft >1 && guessleft <=10){
    guessleft -=1
  } else if (guessleft=== 1) {
    guessleft +=9
  }
    

  // Computer Choice
  compChoice = letterChoices[Math.floor(Math.random() * 26)]




  // Create a piece of html to display the game's results
  let html = `
<h3>Wins : ${winScore}</h3>
<h3>Losses : ${lossesScore}</h3>
<h3>Guesses Left : ${guessleft}</h3>
<h3>Your Guesses so far : ${userChoice}</h3>
`
  // Puts the html into the game div
  document.querySelector(".game").innerHTML = html

}