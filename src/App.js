import { useState } from 'react';
import './App.css';
// import Box from "./components/Box"
import Board from './components/Board';
import ResetButton from './components/ResetButton';
import ScoreBoard from './components/ScoreBoard';


function App() {
  const win_conditions= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  // const board = ["X","X","X","X","X","X","X","X","x"]
  const [board, setBoard]= useState(Array(9).fill(null))
  const [xplaying, setXplaying] = useState(true);
  const [score, setScore] = useState({xScore:0, oScore:0});
  const [gameOver, setGameOver] = useState(false);
  const handleClick = (boxId) =>{
  const updatedBoard = board.map(
    (value,idx) =>{
      if (idx===boxId){
        return xplaying ===true ? "X":"O";
      }else{
        return value
      }
    }
  )
  const winner = checkWinner(updatedBoard);
  if(winner){
    if (winner === "O"){
      let {oScore} = score;
      oScore+=1;
      setScore({...score,oScore})
    }else{
      let {xScore} = score;
      xScore+=1;
      setScore({...score,xScore})
    }
  }
  // console.log(score);
  setBoard(updatedBoard);
  setXplaying(!xplaying);
  }

  const checkWinner=(board) =>{
    for (let i =0; i<win_conditions.length; i++){
      const [x,y,z] = win_conditions[i];
      if(board[x] && board[x]===board[y] && board[y]===board[z]){
        // console.log(board[x]);
        setGameOver(true)
        return board[x]
      }
    }
  }
  const resetGame = ()=>{
    setGameOver(false)
    setBoard(Array(9).fill(null))
  }
  return (
    <div className="App">
      <ScoreBoard score = {score} xplaying = {xplaying}/>
      <Board board = {board} onClick = {gameOver ?resetGame : handleClick} />
      {/* <Box value = "O" onClick = {null}   /> */}
      <ResetButton resetGame = {resetGame} />
    </div>
  );
}

export default App;

// https://www.youtube.com/watch?v=c8dXnuVwmA8&ab_channel=CodeComplete
