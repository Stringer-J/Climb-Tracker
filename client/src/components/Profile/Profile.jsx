import './Profile.css';
import { AuthContext } from '../../utils/AuthContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


function Profile() {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <>
            PROFILE
            <button onClick={handleLogout}>Logout</button>
        </>
    );
};

export default Profile;