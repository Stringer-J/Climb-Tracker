import './SettingsUserInfo.css';
import { useContext } from 'react';
import { AuthContext } from '../../../../utils/AuthContext';

function SettingsUserInfo() {
    const { user } = useContext(AuthContext);

    return (
        <>
            <div className='settingsUserInfoBody'>
                USER INFO<br /><br />
                USER<hr /> {user.username}<br /><br />
                EMAIL<hr /> {user.email}<br /><br />
                <button className='unusedButton'>UPDATE INFO</button>
                <button className='unusedButton'>DELETE USER</button>
            </div>
        </>
    );
};

export default SettingsUserInfo;