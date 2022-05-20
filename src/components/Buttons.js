import React from 'react'

const Buttons = (props) => {
    
    function toggleStart(){
        props.setIsStart( prev => !prev)
        props.setIsActive(true);
    }

  return (
    <div>
        
        {
            !props.hasWon && 
            <button onClick={toggleStart} className="roll-button">{ props.isStart ? "End" : "Start" }</button>
            
        }
        {
            !props.hasWon && props.isStart &&
            <button onClick={props.rollDices} className="roll-button">Roll</button>
        }
        {   
            props.hasWon && 
            <button onClick={props.resetDices} className="roll-button">New Game</button>
        }

    </div>
  )
}

export default Buttons