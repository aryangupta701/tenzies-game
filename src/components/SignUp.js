import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate()

    const submitButton = (event)=>{
        event.preventDefault()
        navigate("/play")
    }
  return (
    <div>
        <form> 
            <label>First Name</label>
            <input 
                placeholder='First Name'
            />
            <label>Last Name</label>
            <input 
                placeholder='Last Name'
            />
            <label>UserName</label>
            <input 
                placeholder='UserName'
            />
            <label>Email</label>
            <input 
                placeholder='example@gmail.com'
            />
            <label>Password</label>
            <input 
                placeholder='Password'
            />
            <label>Confirm Password</label>
            <input 
                placeholder='Confirm Password'
            />
            <button onClick={submitButton}>Submit</button>
        </form>
    </div>
  )
}

export default SignUp