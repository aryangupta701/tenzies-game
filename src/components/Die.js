import { nanoid } from 'nanoid'
import React from 'react'
import Dots from './Dots'

const Die = (props) => {
  return (
    <div className={props.dice.roll ? "dice-box" : "dice-box checked"}
        onClick={()=>{props.toggleHold(props.dice.id)}}
    >
        <Dots count={props.dice.value}/>    
    </div>
  )
}

export default Die