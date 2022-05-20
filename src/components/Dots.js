import { nanoid } from 'nanoid'
import React from 'react'

const Dots = (props) => {
    let dotElements = []
    for(let i=0; i<props.count; i++){
        dotElements.push(
            <div className='dot' key={nanoid()}></div>
        ) 
        
    }
  return (
    <div className='dots-container'>
        {dotElements}
    </div>
  )
}

export default Dots