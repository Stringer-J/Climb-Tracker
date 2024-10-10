import './TrainingMain.css';
import { useNavigate } from 'react-router-dom';


function TrainingMain() {
    const navigate = useNavigate();

    const handleTrainingAdd = () => {
        navigate('/trainingAdd');
    };

    const handleTrainingPast = () => {
        navigate('/trainingPast');
    };

    const handleTrainingStatsClick = () => {
        navigate('/trainingStats');
    };

    return (
        <>
            <div className='trainingMainBody'>
               TRAINING MAIN<br /><br />
                    <button className='usedButton' onClick={handleTrainingAdd}>Log Workout</button>
                    <button className='usedButton' onClick={handleTrainingPast}>Past Workouts</button>
                    <button className='unusedButton'>Training Plan</button>
                    <button className='usedButton' onClick={handleTrainingStatsClick}>Statistics</button>
            </div>
        </>
    );
};

export default TrainingMain;