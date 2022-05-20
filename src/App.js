import React from 'react';
import './App.css'
import MainGame  from './components/MainGame'
import Header from './components/Header';

function App() {
  const[isStart,setIsStart] = React.useState(()=> false)
  // const[highScore, setHighScore] = React.useState(()=>{
  //   return JSON.parse(localStorage.getItem("highScore")) || {}
  // })
  const[highScore, setHighScore] = React.useState(()=>{
    return {
      rolls : 10, 
      time : {
        minutes:5,
        seconds:5
      }}
  })
  const[currentScore,setCurrentScore] = React.useState(() => {
    return {
      rolls : 0, 
      time : {
        minutes:0,
        seconds:0
      }
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
      }, 1000);
      return ()=>clearInterval(timer)
    }
  })

  return (
    <div className='app-container'>
      <div className="App">

        <Header isStart={isStart} 
          setIsStart={setIsStart}
          currentScore ={currentScore}
          seconds={seconds}
          setSeconds={setSeconds}
          minutes={minutes}
          setMinutes={setMinutes}
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
        />

      </div>
    </div>
  );
}

export default App;
