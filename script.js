    // Variables //
let activeGame, activePlayer, numberPlayer, diceScore, roundScore, globalScore

    // Nouvelle partie (newGame) //
document.getElementById('newGame').addEventListener('click', newGame)

function newGame() {
  activeGame = true;
  activePlayer = 0;
  numberPlayer = [1, 2];
  diceScore = 0;
  roundScore = [0, 0];
  globalScore = [0, 0];
  document.getElementById('roundScore1').textContent = 0;
  document.getElementById('roundScore2').textContent = 0;
  document.getElementById('globalScore1').textContent = 0;
  document.getElementById('globalScore2').textContent = 0;
  alert("LET'S GO !");
}

    // Lancer le dé (rollDice) //
document.getElementById('rollDice').addEventListener('click', function() {
  if(activeGame) {
    diceScore = Math.trunc(Math.random() * 6 + 1);
    roundScore[activePlayer] = parseInt(document.getElementById('roundScore' + numberPlayer[activePlayer]).textContent, 10);
    if(diceScore != 1) {
      document.getElementById('sixSidedDice').src = 'images/' + diceScore + '.png';
      roundScore[activePlayer] += diceScore;
      document.getElementById('roundScore' + numberPlayer[activePlayer]).textContent = roundScore[activePlayer];
    } else {
      document.getElementById('sixSidedDice').src = 'images/' + diceScore + '.png';
      document.getElementById('roundScore' + numberPlayer[activePlayer]).textContent = roundScore[activePlayer];
      changePlayer();
      alert('LOSER ! Next Player...');
    }
  }
})

    // Retenir le score (holdDice) //
document.getElementById('holdDice').addEventListener('click', function() {
  if (activeGame && roundScore[activePlayer] != 0) {
    globalScore[activePlayer] += roundScore[activePlayer];
    document.getElementById('globalScore' + numberPlayer[activePlayer]).textContent = globalScore[activePlayer];
    winGame()
  }
})                   

    // Changement de joueur (changePlayer) //
function changePlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
    resetRoundScores();
  } else {
    activePlayer = 0;
    resetRoundScores();
  }
}

    // Reinitialisation des scores (resetRoundScore)
function resetRoundScores() {
  roundScore = [0, 0]
  diceScore = 0;
  document.getElementById('roundScore1').textContent = 0;
  document.getElementById('roundScore2').textContent = 0;  
}

  // Gagner la partie (winGame) //
function winGame() {
  if (globalScore[activePlayer] >= 100) {
    alert('PLAYER ' + numberPlayer[activePlayer] + ' IS A WINNER !');
    newGame();
    return true;
  } else {
    changePlayer()
  }
}