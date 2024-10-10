import './ClimbLogDetail.css';
import { useLocation } from 'react-router-dom';

function ClimbLogDetail() {
    const location = useLocation();
    const { climb } = location.state;

    console.log(climb);

    return (
        <>
            <div className='climbLogDetailBody'>
                CLIMB DETAILS<br /><br />
                NAME:<hr /> {climb.name}<br /><br />
                DATE:<hr /> {new Date(Number(climb.date)).toISOString().slice(0, 10)}<br /><br />
                AREA:<hr /> {climb.area}, {climb.subArea}<br /><br />
                TYPE:<hr /> {climb.type}<br /><br />
                GRADE:<hr /> {climb.grade}<br /><br />
                LENGTH:<hr /> {climb.length} meters<br /><br />
                ATTEMPTS:<hr /> {climb.numAttempts}<br /><br />
                COMMENTS:<hr /> {climb.comments}<br />
            </div>
        </>
    );
};

export default ClimbLogDetail;