import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { isStartToggle } from '../store/index';

const Buttons = (props) => {
    const isStart = useSelector(state => state.isStart)
    const dispatch = useDispatch()
    function toggleStart(){
        dispatch(isStartToggle())
        props.setIsActive(true);
    }

  return (
    <div>
        
        {
            !props.hasWon && 
            <button onClick={toggleStart} className={isStart ? "roll-button" : "start-button"}>{isStart ? "End" : "Start" }</button>
            
        }
        {
            !props.hasWon && isStart &&
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