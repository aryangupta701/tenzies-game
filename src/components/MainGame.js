import React from "react"

export default function MainGame(){
    const [diceValues,setDiceValues] = React.useState(initializeDiceValue())
    const[isRoll,setIsRoll] = React.useState(checkIsRoll())
    
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

    function checkIsRoll(){
        for(let i=0; i<10; i++){
            if(diceValues[i].roll === true)
                return true;
        }
        return false;
    }

    function toggleRoll(event){
        // console.log("hello",event)
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
    return(
        <div className="game--main">
            <h2>Tenzies</h2>
            <p className="head-text">
                Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
            </p>
            <div className="dice-container">
                {diceElements}
            </div>
            {isRoll && <button onClick={rollDices}>Roll</button>}
            {!isRoll && <button onClick={resetDices}>Reset</button>}
        </div>
    )
}