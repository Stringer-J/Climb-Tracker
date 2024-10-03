import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className='appBox'>
          <div className='header'>
              <h1>Climb Tracker</h1>
          </div>
          <div className='mainButtons'>
              <button className='mainButton'>Sign Up</button>
              <button className='mainButton'>Log In</button>
          </div>
          <div className='footer'>
              <h4>This is a footer</h4>
          </div>
      </div>
    </>
  )
}

export default App
