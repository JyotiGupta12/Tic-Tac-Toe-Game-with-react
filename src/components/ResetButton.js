import React from 'react'
import "./ResetButton.css"

const ResetButton = ({resetGame}) => {
  return (
    <div>
      <button className = "reset" onClick = {resetGame}>RESET</button>
    </div>
  )
}

export default ResetButton
