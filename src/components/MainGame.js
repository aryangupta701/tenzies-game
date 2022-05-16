import React from "react"
import Confetti from "react-confetti"
import { useWindowSize } from "@react-hook/window-size"

export default function MainGame(){
    const [diceValues,setDiceValues] = React.useState(initializeDiceValue())
    const[isRoll,setIsRoll] = React.useState(checkIsRoll())
    
    function checkIsRoll(){
        const allHeld = diceValues.every(die => die.roll === false)
        const firstValue = diceValues[0].value
        const allSameValue = diceValues.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            return false
        }
        return true
    }

    React.useEffect(()=>{
        setIsRoll(checkIsRoll)
    },[diceValues])

    function initializeDiceValue(){
        let temp = []
        for(let i=0 ; i<10; i++){
            temp.push({
                key: i,
                roll : true,
                value : Math.floor(Math.random()*6) + 1
            })
        }
        return temp
    }

    

    function toggleRoll(event){
        let i = parseInt(event.target.id[8])
        setDiceValues((prev)=>{
            return prev.map((dice)=>{
                if(dice.key === i){
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
                <div className={diceValue.roll ? "dice-box" : "dice-box checked"}
                 onClick={toggleRoll }
                 id = {`dice-id-${diceValue.key}`}
                 key = {diceValue.key}
                 >
                    {diceValue.value}
                </div>
            )
        })
    
    function rollDices(){
        setDiceValues(prevValues => {
            return prevValues.map(dice => {
                return dice.roll ? { ...dice , value : Math.floor(Math.random()*6) + 1} : dice
            })
        }) 
    }

    function resetDices(){
        setDiceValues(initializeDiceValue())
    }
    const { width, height } = useWindowSize()
    return(
        <div className="game--main">
            {!isRoll && <Confetti height={height} width={width} numberOfPieces={500}/>}
            <h2>Tenzies</h2>
            <p className="head-text">
                Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
            </p>
            <div className="dice-container">
                {diceElements}
            </div>
            {isRoll && <button onClick={rollDices}>Roll</button>}
            {!isRoll && <button onClick={resetDices}>New Game</button>}
        </div>
    )
}