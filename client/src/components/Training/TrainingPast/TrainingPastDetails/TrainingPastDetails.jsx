import './TrainingPastDetails.css';
import { useLocation } from 'react-router-dom';

function TrainingPastDetails() {
    const location = useLocation();
    const { workout } = location.state;

    console.log(workout);

    return (
        <>
            <div className='trainingPastDetailsBody'>
                WORKOUT DETAILS<br /><br />
                <p>Date: {new Date(Number(workout.date)).toISOString().slice(0, 10)}</p>
                <ul>
                    {workout.exercises.map((exercise, index) => (
                        <li key={index}>
                            {exercise.name} - Sets: {exercise.sets}, Reps: {exercise.reps}, Weight: {exercise.weight}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default TrainingPastDetails;