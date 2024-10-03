import { useContext, useState } from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { AuthContext, AuthProvider } from './utils/AuthContext.jsx';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import './App.css'
import Signup from './components/Signup/Signup.jsx';
import Login from './components/Login/Login.jsx';
import Profile from './components/Profile/Profile.jsx';

export const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {

  return (
    <>
    <AuthProvider>
    <ApolloProvider client={client}>
      <Router>
      <div className='appBox'>
          <div className='header'>
              <h1>Climb Tracker</h1>
          </div>
          <div className='mainButtons'>
              
              <Link to='/signup'>
              <button className='mainButton'>Sign Up</button>
              </Link>
        
              <Link to='/login'>
              <button className='mainButton'>Login</button>
              </Link>
          </div>
          <div className='mainContent'>
              <MainContent />
          </div>
          <div className='footer'>
              <h4>This is a footer</h4>
          </div>
      </div>
      </Router>
    </ApolloProvider>
    </AuthProvider>
    </>
  )
}

const MainContent = () => {
  const { user } = useContext(AuthContext);

  return (
      <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={user ? <Navigate to='/profile' /> : <Login />} />
          <Route path='/profile' element={user ? <Profile /> : <Navigate to='/login' />} />
          <Route path='*' element={<Navigate to='/login' />} />
      </Routes>
  );
};

export default App;
