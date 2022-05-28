import React from 'react';
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Game from './components/Game';
import Login from './components/Login';
import Home from './components/Home'
import SignUp from './components/SignUp'
import Profile from './components/Profile';
function App() {
  return (
    <div className='app-container'>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />}/>
            <Route path='/play' element={<Game />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
