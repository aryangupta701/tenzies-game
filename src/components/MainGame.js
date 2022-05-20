import React from "react"
import Confetti from "react-confetti"
import { useWindowSize } from "@react-hook/window-size"
import { nanoid } from "nanoid"
import Die from "./Die"
import Buttons from "./Buttons"

export default function MainGame(props){
    const [diceValues,setDiceValues] = React.useState(initializeDiceValue())
    const[hasWon,setHasWon] = React.useState(()=> false)

    function checkHasWon(){
        const allHeld = diceValues.every(die => die.roll === false)
        const firstValue = diceValues[0].value
        const allSameValue = diceValues.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            return false
        }
        props.setIsActive(false)
        props.setCurrentScore(prev => {
            return {
                ...prev, 
                time : {
                    minutes : props.minutes,
                    seconds : props.seconds
                }
            }
        })
        // if(props.highScore){
            if(props.highScore.rolls > props.currentScore.rolls){
                props.setHighScore( prev => {
                    return {...prev,rolls:props.currentScore.rolls}
                })
            }

            if(props.highScore.time.minutes > props.currentScore.time.minutes){
                props.setHighScore( prev => {
                    return {...prev,time:{minutes: props.currentScore.time.minutes, seconds: props.currentScore.time.seconds}}
                })
            }
            else if(props.highScore.time.minutes === props.currentScore.time.minutes && props.highScore.time.seconds > props.currentScore.time.seconds){
                props.setHighScore( prev => {
                    return {...prev,time:{minutes:props.currentScore.time.minutes, seconds: props.currentScore.time.seconds}}
                })
            }
        // }else{
        //     props.setHighScore(props.currentScore);
        // }
        // localStorage.setItem("highScore",JSON.stringify(props.highScore));
        return true
    }

    React.useEffect(()=>{
        setHasWon(checkHasWon)
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
        props.setIsActive(true)
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
            {!hasWon && <Confetti height={height} width={width} numberOfPieces={500}/>}
            <h2>Tenzies</h2>
            <p className="head-text">
                Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
            </p>
            <div className="dice-container">
                {diceElements}
            </div>
            <Buttons hasWon={hasWon} 
                resetDices={resetDices}
                rollDices={rollDices}
                isStart = {props.isStart}
                setIsStart = {props.setIsStart}
                setIsActive = {props.setIsActive}
            />
        </div>
    )
}