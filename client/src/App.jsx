import { useContext } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { AuthContext, AuthProvider } from './utils/AuthContext.jsx';
import { BrowserRouter as Router, Route, Routes, Link, Navigate, useLocation } from 'react-router-dom';
import './App.css';

//pages, there has to be a better way to do this
import Signup from './components/Signup/Signup.jsx';
import Login from './components/Login/Login.jsx';
import Profile from './components/Profile/Profile.jsx';
import TrainingMain from './components/Training/TrainingMain/TrainingMain.jsx';
import TrainingAdd from './components/Training/TrainingAdd/TrainingAdd.jsx';
import TrainingPast from './components/Training/TrainingPast/TrainingPast.jsx';
import TrainingPastDetails from './components/Training/TrainingPast/TrainingPastDetails/TrainingPastDetails.jsx';
import TrainingStats from './components/Training/TrainingStats/TrainingStats.jsx';
import ClimbsMain from './components/Climbs/ClimbsMain/ClimbsMain.jsx';
import ClimbsLog from './components/Climbs/ClimbsLog/ClimbsLog.jsx';
import ClimbsLogPast from './components/Climbs/ClimbsLog/ClimbsLogPast/ClimbsLogPast.jsx';
import ClimbsLogDetails from './components/Climbs/ClimbsLog/ClimbLogDetail/ClimbLogDetail.jsx';
import ClimbStats from './components/Climbs/ClimbStats/ClimbStats.jsx';
import SettingsMain from './components/Settings/SettingsMain/SettingsMain.jsx';
import SettingsUserInfo from './components/Settings/SettingsMain/SettingsUserInfo/SettingsUserInfo.jsx';


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
              
                        <SignUpButton />

                        <LoginProfileButton />

                        <TrainingButton />

                        <ClimbsButton />

                        <SettingsButton />

                    </div>

                    <div className='mainContent'>
                        <MainContent />
                    </div>

                    <div className='footer'></div>

                </div>
            </Router>
        </ApolloProvider>
    </AuthProvider>
    </>
  )
}

const SignUpButton = () => {
    const { user } = useContext(AuthContext);

    return !user ? (
        <Link to='/signup'>
            <button className='usedButton'>Sign Up</button>
        </Link>
    ) : null;
};

const LoginProfileButton = () => {
    const { user } = useContext(AuthContext);
    const location = useLocation();

    const isProfilePage = location.pathname === '/profile';

    return !isProfilePage ? (
        <Link to={user ? '/profile' : '/login'}>
            <button className='usedButton'>{user ? 'Profile' : 'Login'}</button>
        </Link>
    ) : null;
};

const TrainingButton = () => {
    const { user } = useContext(AuthContext);
    const location = useLocation();

    const isTrainingAdd = location.pathname === '/trainingAdd';
    const isTrainingPast = location.pathname === '/trainingPast';
    const isTrainingPastDetails = location.pathname === '/trainingPastDetails';
    const isTrainingStats = location.pathname === '/trainingStats';

    return isTrainingAdd || isTrainingPast || isTrainingPastDetails || isTrainingStats ? (
        <Link to={user ? '/trainingMain' : '/login'}>
            <button className='usedButton'>Training</button>
        </Link>
    ) : null;
};

const ClimbsButton = () => {
    const { user } = useContext(AuthContext);
    const location = useLocation();

    const isClimbsLog = location.pathname === '/climbsLog';
    const isClimbsLogPast = location.pathname === '/climbsLogPast';
    const isClimbsLogDetails = location.pathname === '/climbsLogDetails';
    const isClimbStats = location.pathname === '/climbStats';

    return isClimbsLog || isClimbsLogPast || isClimbsLogDetails || isClimbStats ? (
        <Link to={user ? '/climbsMain' : '/login'}>
            <button className='usedButton'>Climbs</button>
        </Link>
    ) : null;
};

const SettingsButton = () => {
    const { user } = useContext(AuthContext);
    const location = useLocation();

    const isSettingsUserInfo = location.pathname === '/settingsUserInfo';

    return isSettingsUserInfo ? (
        <Link to={user ? '/settingsMain' : '/login'}>
            <button className='usedButton'>Settings</button>
        </Link>
    ) : null;
};

const MainContent = () => {
    const { user } = useContext(AuthContext);

  return (
      <Routes>

        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={user ? <Navigate to='/profile' /> : <Login />} />

        <Route path='/profile' element={user ? <Profile /> : <Navigate to='/login' />} />

        <Route path='/trainingMain' element={<TrainingMain />} />
            <Route path='/trainingAdd' element={<TrainingAdd />} />
            <Route path='/trainingPast' element={<TrainingPast />} />
                <Route path='/trainingPastDetails' element={<TrainingPastDetails />} />
            <Route path='/trainingStats' element={<TrainingStats />} />

        <Route path='/climbsMain' element={<ClimbsMain />} />
            <Route path='/climbsLog' element={<ClimbsLog />} />
            <Route path='/climbsLogPast' element={<ClimbsLogPast />} />
                <Route path='/climbsLogDetails' element={<ClimbsLogDetails />} />
            <Route path='/climbStats' element={<ClimbStats />} />

        <Route path='/settingsMain' element={<SettingsMain />} />
            <Route path='/settingsUserInfo' element={<SettingsUserInfo />} />

        <Route path='*' element={<Navigate to='/login' />} />

      </Routes>
  );
};

export default App;
