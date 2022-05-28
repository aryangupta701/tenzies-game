import React from 'react'
import Header from './Header'
import MainGame from './MainGame'

const Game = () => {
     // localStorage.clear()
  const[isStart,setIsStart] = React.useState(()=> false)
  const[highScore, setHighScore] = React.useState(()=>{
    return JSON.parse(localStorage.getItem("highScore")) 
  })
  
  const[currentScore,setCurrentScore] = React.useState(() => {
    return {
      rolls : 0, 
      minutes:0,
      seconds:0
   } 
  })

  const [seconds,setSeconds] = React.useState(()=> 0);
  const [minutes,setMinutes] = React.useState(()=> 0);
  const [isActive, setIsActive] = React.useState(() => false);
  
  React.useEffect(()=>{

    if(isActive){
      const timer = setInterval(() => {
        if(seconds === 59){
          setMinutes(prev => prev+1);
          setSeconds(0);
        }
        else setSeconds(prev => prev+1);
         setCurrentScore(prev => {
          return {
              ...prev, 
              minutes : minutes,
              seconds : seconds
          }
      })
      }, 1000);
      return ()=>clearInterval(timer)
    }
  },[isActive,seconds])
  return (
    <div>
    <Header isStart={isStart} 
          setIsStart={setIsStart}
          currentScore ={currentScore}
          seconds={seconds}
          setSeconds={setSeconds}
          minutes={minutes}
          setMinutes={setMinutes}
          highScore={highScore}
        />

        <MainGame isStart={isStart}
          setIsStart={setIsStart}
          currentScore ={currentScore}
          setCurrentScore ={setCurrentScore}
          setIsActive = {setIsActive}
          highScore = {highScore}
          setHighScore = {setHighScore}
          setMinutes={setMinutes}
          setSeconds={setSeconds}
          minutes={minutes}
          seconds={seconds}
        />
    </div>
  )
}

export default Game