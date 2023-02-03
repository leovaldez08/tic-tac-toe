const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let moves = 0;

function handleClick(e) {
  moves++;
  const cell = e.target;
  cell.textContent = currentPlayer;
  cell.removeEventListener('click', handleClick);

  const winner = checkForWinner();
  if (winner) {
    alert(`Player ${winner} wins!`);
    resetGame();
  } else if (moves === 9) {
    alert("It's a draw!");
    resetGame();
  } else {
    switchPlayer();
  }
}

for (const cell of cells) {
  cell.addEventListener('click', handleClick);
}

function checkForWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      cells[a].textContent === currentPlayer &&
      cells[b].textContent === currentPlayer &&
      cells[c].textContent === currentPlayer
    ) {
      return currentPlayer;
    }
  }

  return null;
}

function switchPlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function resetGame() {
  for (const cell of cells) {
    cell.textContent = '';
    cell.addEventListener('click', handleClick);
  }
  moves = 0;
  currentPlayer = 'X';
}
