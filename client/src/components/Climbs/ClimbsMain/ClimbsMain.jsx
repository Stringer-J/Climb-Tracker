import './ClimbsMain.css';
import { useNavigate } from 'react-router-dom';

function ClimbsMain() {
    const navigate = useNavigate();

    return (
        <>
            <div className='climbsMainBody'>
                CLIMBS MAIN<br /><br />
                <button className='unusedButton'>Log Climb</button>
                <button className='unusedButton'>Past Climbs</button>
                <button className='unusedButton'>Statistics</button>
            </div>
        </>
    );
};

export default ClimbsMain;