import './ClimbsMain.css';
import { useNavigate } from 'react-router-dom';

function ClimbsMain() {
    const navigate = useNavigate();

    const handleClimbLogClick = () => {
        navigate('/climbsLog');
    };

    return (
        <>
            <div className='climbsMainBody'>
                CLIMBS MAIN<br /><br />
                <button className='usedButton' onClick={handleClimbLogClick}>Log Climb</button>
                <button className='unusedButton'>Past Climbs</button>
                <button className='unusedButton'>Statistics</button>
            </div>
        </>
    );
};

export default ClimbsMain;