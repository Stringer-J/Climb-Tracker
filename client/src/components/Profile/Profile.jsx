import './Profile.css';
import { AuthContext } from '../../utils/AuthContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


function Profile() {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleTraining = () => {
        navigate('/trainingMain');
    }

    const handleClimbs = () => {
        navigate('/climbsMain');
    }

    const handleLogout = () => {
        logout();
        navigate('/login');
    }

    return (
        <>
            <div className='profileBody'>
               PROFILE<br />
               <h1>{user.username}</h1>
                    <button className='usedButton' onClick={handleTraining}>Training</button>
                    <button className='usedButton' onClick={handleClimbs}>Climbs</button>
                    <button className='unusedButton'>Settings</button>
                    <button className='usedButton' onClick={handleLogout}>Logout</button>
            </div>
        </>
    );
};

export default Profile;