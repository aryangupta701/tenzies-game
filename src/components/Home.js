import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const  handleclick = ()=>{
        navigate("/play")
    }
  return (
    <div className='home-page'>
        <h1>Welcome to Tenzies !</h1>
        <img src='https://c.tenor.com/3lEdcZ1bSgAAAAAC/welcome-be-welcome.gif' className='welcome-gif' />
        <div>
            <button onClick={handleclick} className='home-btn'>Click Here to Play</button>
        </div>
    </div>
  )
}

export default Home