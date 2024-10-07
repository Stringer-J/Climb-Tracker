import './Profile.css';
import { AuthContext } from '../../utils/AuthContext';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Profile() {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    }

    return (
        <>
            <div className='profileBody'>
               PROFILE<br />
               <h1>{user.username}</h1>
               <button className='profileButton'>Training</button>
               <button className='profileButton' onClick={handleLogout}>Logout</button>
            </div>
        </>
    );
};

export default Profile;