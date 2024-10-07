import './TrainingMain.css';
import { useNavigate } from 'react-router-dom';


function TrainingMain() {
    const navigate = useNavigate();

    const handleTrainingAdd = (e) => {
        navigate('/trainingAdd');
    };

    return (
        <>
            <div className='trainingMainBody'>
               TRAINING MAIN<br /><br />
                    <button className='usedButton' onClick={handleTrainingAdd}>Log Workout</button>
                    <button className='unusedButton'>Past Workouts</button>
                    <button className='unusedButton'>Training Plan</button>
                    <button className='unusedButton'>Statistics</button>
            </div>
        </>
    );
};

export default TrainingMain;