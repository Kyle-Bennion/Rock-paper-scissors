
function play(playerChoice) {
  let compChoice = 'rock'

  if (compChoice == playerChoice) {
    console.log('tie')
  }
  else if (playerChoice == 'scissors') {
    if (compChoice == 'rock') {
      console.log('Lose')
    }
    else {
      console.log('win')
    }
  }
  else if (playerChoice == 'paper') {
    if (compChoice == 'rock') {
      console.log('win')
    }
    else {
      console.log('Lose')
    }
  }
  else {
    if (compChoice == 'paper') {
      console.log('Lose')
    }
  }

  else {
    if (compChoice == 'scissors') {
      console.log('Win')
    }
  }

}


