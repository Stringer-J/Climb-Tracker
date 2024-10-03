import { useState } from 'react'
import './App.css'
import Signup from './components/Signup/Signup.jsx';
import Login from './components/Login/Login.jsx';

function App() {
  const [mainButtonChoice, setMainButtonChoice] = useState(null);

  const handleMainButtonChoice = (component) => {
    setMainButtonChoice(component);
  }

  const renderMainButtonComponent = () => {
    switch (mainButtonChoice) {
      case 'Signup':
        return <Signup />
      case 'Login':
        return <Login />
    }
  }

  return (
    <>
      <div className='appBox'>
          <div className='header'>
              <h1>Climb Tracker</h1>
          </div>
          <div className='mainButtons'>
              <button className='mainButton'
                      onClick={() => handleMainButtonChoice('Signup')}>
                  Sign Up
              </button>
              <button className='mainButton'
                      onClick={() => handleMainButtonChoice('Login')}>
                  Log In
              </button>
          </div>
          <div className='mainContent'>
              {renderMainButtonComponent()}
          </div>
          <div className='footer'>
              <h4>This is a footer</h4>
          </div>
      </div>
    </>
  )
}

export default App
