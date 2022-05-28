import React from 'react'
import { GoogleLogout, GoogleLogin } from 'react-google-login'
import { Navigate, useNavigate } from 'react-router-dom'
const Login = () => {
    const clientId="507022160669-3ticfr49ei3a82v9bebo30dk7phsig5b.apps.googleusercontent.com"
    const navigate = useNavigate()
    const responseGoogle = (res)=>{
        // navi
        console.log(res)
      }

    const loginButton = (event)=>{
      event.preventDefault()
      navigate("/play")
    }

    const signUpButton = (event)=>{
      event.preventDefault()
      navigate('/signup')
    }
  return (
    <div>
        Login
        <div className='login-form'> 
          <div className='login-entry'>
            <label>Email</label>
            <input placeholder='example@gmail.com' />
          </div>
          <div className='login-entry'>
            <label>Password</label>
            <input placeholder='Enter Password' />
          </div>
          <button onClick={loginButton}>Login</button>
          <button onClick={signUpButton}>Sign Up</button>
        </div>
        
        {/* <GoogleLogin
            clientId={clientId}
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        /> */}
    </div>
  )
}

export default Login