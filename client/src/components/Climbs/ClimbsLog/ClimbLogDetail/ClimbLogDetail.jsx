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
                NAME:<br /> {climb.name}<br /><br />
                DATE:<br /> {new Date(Number(climb.date)).toISOString().slice(0, 10)}<br /><br />
                AREA:<br /> {climb.area}, {climb.subArea}<br /><br />
                TYPE:<br /> {climb.type}<br /><br />
                GRADE:<br /> {climb.grade}<br /><br />
                LENGTH:<br /> {climb.length}<br /><br />
                ATTEMPTS:<br /> {climb.numAttempts}<br /><br />
                COMMENTS:<br /> {climb.comments}<br />
            </div>
        </>
    );
};

export default ClimbLogDetail;