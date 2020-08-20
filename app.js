
function play(playerChoice) {
  let choices = ['rock', 'paper', 'scissors']
  let randomValue = Math.floor(Math.random() * choices.length - 0.01)
  let compChoice = choices[randomValue]

  if (compChoice == playerChoice) {
    drawResult('tie')
  }
  else if (playerChoice == 'scissors') {
    if (compChoice == 'rock') {
      drawResult('Lose')
    }
    else {
      drawResult('win')
    }
  }
  else if (playerChoice == 'paper') {
    if (compChoice == 'rock') {
      drawResult('win')
    }
    else {
      drawResult('Lose')
    }
  }
  else {
    if (compChoice == 'paper') {
      drawResult('Lose')
    }
    else {
      if (compChoice == 'scissors') {
        drawResult('Win')
      }
    }
  }
}

function drawResult(result) {
  let elem = document.getElementById("result")
  elem.innerText
}

