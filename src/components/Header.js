import React from 'react'

const Header = (props) => {
  const minutes = props.minutes
  const seconds = props.seconds
  return (
    !props.highScore && !props.isStart ? <div></div>:
    <div className='header-container'>
      {props.highScore &&
      <div>
          <h2 className='header-heading'>High Score</h2>
          <div className='highscore--data'>
            <div>
              <span>Time </span>
              <span>{`${props.highScore.minutes < 10 ? "0"+props.highScore.minutes : props.highScore.minutes } :
               ${props.highScore.seconds < 10 ? "0"+props.highScore.seconds : props.highScore.seconds} `}
               </span>
               </div>
           <div><span>Rolls </span><span>{props.highScore.rolls}</span></div>
          </div>
        </div>
      }
        {props.isStart &&
      <div>
          <h2 className='header-heading'>Current Score</h2>
          <div className='currentscore--data'>
            <div><span>Time </span><span>{`${minutes < 10 ? "0"+minutes : minutes} : ${seconds < 10 ? "0"+seconds : seconds}`}</span></div>
           <div><span>Rolls </span><span>{props.currentScore.rolls}</span></div>
          </div>
        </div>
      }
    </div>
  )
}

export default Header