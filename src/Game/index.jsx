import React, { useState } from 'react';
import styles from './styles';
import Board from '../components/Board/index';

export default () => {
  const [history, setHistory] = useState([{
    squares: Array(9).fill(null),
  }]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);
  const current = history[stepNumber];
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i += 1) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };
  const handleClick = (i) => {
    const subHistory = history.slice(0, stepNumber + 1);
    const currentSubHistory = subHistory[subHistory.length - 1];
    const squares = currentSubHistory.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory(subHistory.concat([{
      squares,
    }]));
    setStepNumber(subHistory.length);
    setXIsNext(!xIsNext);
  };
  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext((step % 2) === 0);
  };
  const winner = calculateWinner(current.squares);

  const moves = history.map((step, move) => {
    const desc = move
      ? `Go to move #${move}`
      : 'Go to game start';
    return (
      <li key={move}>
        <button type="button" onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });
  const nextPlayer = xIsNext ? 'X' : 'O';
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${nextPlayer}`;

  return (
    <div style={styles.game}>
      <div style={styles.gameBoard}>
        <Board
          squares={current.squares}
          onClick={(i) => handleClick(i)}
        />
      </div>
      <div style={styles.gameInfo}>
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};
