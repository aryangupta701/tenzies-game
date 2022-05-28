import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate()

    const submitButton = (event)=>{
        event.preventDefault()
        navigate("/play")
    }
  return (
    <div style={{padding:"10px"}}>
        <form className='signup-form'> 
            <div className='signup-entry'>
                <label>First Name</label>
                <input 
                    placeholder='First Name'
                />
            </div>
            <div className='signup-entry'>
                <label>Last Name</label>
                <input 
                    placeholder='Last Name'
                />
            </div>
            <div className='signup-entry'> 
                <label>UserName</label>
                <input 
                    placeholder='UserName'
                />
            </div>
            <div className='signup-entry'> 
                <label>Email</label>
                <input 
                    placeholder='example@gmail.com'
                />
            </div>
            <div className='signup-entry'>
                <label>Password</label>
                <input 
                    placeholder='Password'
                />
            </div>
            <div className='signup-entry'>  
                <label>Confirm Password</label>
                <input 
                    placeholder='Confirm Password'
                />
            </div>
            <button onClick={submitButton}>Submit</button>
        </form>
    </div>
  )
}

export default SignUp