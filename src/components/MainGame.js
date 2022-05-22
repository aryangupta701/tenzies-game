import React from "react"
import Confetti from "react-confetti"
import { useWindowSize } from "@react-hook/window-size"
import { nanoid } from "nanoid"
import Die from "./Die"
import Buttons from "./Buttons"

export default function MainGame({setIsActive,...props}){
    
    const [diceValues,setDiceValues] = React.useState(initializeDiceValue())
    const[hasWon,setHasWon] = React.useState(()=> false)
    const[triggerHigh, setTriggerHigh] = React.useState(false)

    function checkHasWon(){
        const allHeld = diceValues.every(die => die.roll === false)
        const firstValue = diceValues[0].value
        const allSameValue = diceValues.every(die => die.value === firstValue)
        if ( ! (allHeld && allSameValue) ) {
            return false
        }
        console.log(props.currentScore.rolls)
        if(props.highScore){
            if(props.highScore > props.currentScore.rolls){
                props.setHighScore( prev => {
                    return {...prev,rolls:props.currentScore.rolls}
                })
                setTriggerHigh(true)
            }
            if(props.highScore.minutes > props.currentScore.minutes){
                props.setHighScore( prev => {
                    return {...prev,minutes: props.currentScore.minutes, seconds: props.currentScore.seconds}
                })
                setTriggerHigh(true)
            }
            else if(props.highScore.minutes === props.currentScore.minutes && props.highScore.seconds > props.currentScore.seconds){
                props.setHighScore( prev => {
                    return {...prev,minutes:props.currentScore.minutes, seconds: props.currentScore.seconds}
                 })
                setTriggerHigh(true)
            }
        }else{
            props.setHighScore(props.currentScore);
        }
        console.log(props.highScore)
        localStorage.setItem("highScore",JSON.stringify(props.highScore));
        return true
    }
 
    React.useEffect(()=>{
        const t = checkHasWon()
        setHasWon(t)
        if(t) setIsActive(false)
    },[diceValues])
 
    function initializeDiceValue(){
        let temp = []
        for(let i=0 ; i<10; i++){
            temp.push({
                id: nanoid(),
                roll : true,
                value : Math.floor(Math.random()*6) + 1
            })
        }
        return temp
    }

    

    function toggleHold(id){
        setDiceValues((prev)=>{
            return prev.map((dice)=>{
                if(dice.id === id){
                    return {
                        ...dice,
                        roll : !dice.roll
                    }
                }
                else return dice
            })
        })
    }

    const diceElements = diceValues.map( diceValue => {
            return(
                <Die key={diceValue.id}
                    dice ={diceValue} 
                    toggleHold={toggleHold}
                    />
            )
        })
    
    function rollDices(){
        setDiceValues(prevValues => {
            return prevValues.map(dice => {
                return dice.roll ? { ...dice , value : Math.floor(Math.random()*6) + 1} : dice
            })
        })
        props.setCurrentScore(prev => {
            return {
                ...prev, 
                rolls : prev.rolls+1
            }
        }) 
    }

    function resetDices(){
        setDiceValues(initializeDiceValue())
        props.setSeconds(0)
        props.setMinutes(0)
        setIsActive(true)
        setTriggerHigh(false)
        props.setCurrentScore(
            {
              rolls : 0, 
              time : {
                minutes:0,
                seconds:0

              }
            }
           )
    }
    const { width, height } = useWindowSize()
    return(
        <div className="game--main">
            {triggerHigh && <p> new high score !!! </p>}
            {hasWon && <Confetti height={height} width={width} numberOfPieces={500}/>}
            <h2>Tenzies</h2>
            <p className="head-text">
                Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
            </p>
            {
                props.isStart &&
                <div className="dice-container">
                   {diceElements}
                </div>
            }   
            <Buttons hasWon={hasWon} 
                resetDices={resetDices}
                rollDices={rollDices}
                isStart = {props.isStart}
                setIsStart = {props.setIsStart}
                setIsActive = {setIsActive}

            />
            
        </div>
    )
}