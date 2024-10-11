import './SettingsMain.css';
import { useNavigate } from 'react-router-dom';

function SettingsMain() {
    const navigate = useNavigate();

    const handleUserInfoClick = () => {
        navigate('/settingsUserInfo');
    };

    return (
        <>
            <div className='settingsMainBody'>
                SETTINGS MAIN<br /><br />
                <button className='usedButton' onClick={handleUserInfoClick}>User Info</button>
            </div>
        </>
    );
};

export default SettingsMain;
