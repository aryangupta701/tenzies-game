import React from 'react'

const Header = (props) => {
  const minutes = props.minutes
  const seconds = props.seconds
  return (
    <div className='header-container'>
        <div>Minimum Time</div>
        <div>Minimum Rolls</div>
        {props.isStart && <div>Current Time : {minutes<10? "0"+minutes : minutes}:{seconds<10 ? "0"+seconds: seconds} </div>}
        {props.isStart && <div>Current Rolls : {props.currentScore.rolls}</div>}
    </div>
  )
}

export default Header