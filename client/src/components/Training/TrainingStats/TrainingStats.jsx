import { useContext } from 'react';
import { AuthContext } from '../../../utils/AuthContext';
import { useQuery } from '@apollo/client';
import { GET_WORKOUTS } from '../../../utils/queries';
import './TrainingStats.css';

function TrainingStats() {
    const { user } = useContext(AuthContext);
    const { loading, error, data } = useQuery(GET_WORKOUTS, {
        variables: { userId: user._id },
        skip: !user._id,
    });

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading workouts</div>;

    const workouts = data.getWorkouts || [];
    const workoutCount = workouts.length;

    const exerciseCount = {};

    workouts.forEach(workout => {
        workout.exercises.forEach(exercise => {
            const name = exercise.name;

            if (exerciseCount[name]) {
                exerciseCount[name] += 1;
            } else {
                exerciseCount[name] = 1;
            }
        });
    });
    
    return (
        <>
            <div className='trainingStatsBody'>
                TRAINING STATS<br /><br />
                <div># of Workouts: <hr />{workoutCount}</div><br />
                <div>
                    Exercises:<hr />
                    <ul>
                        {Object.entries(exerciseCount).map(([exercise, count]) => (
                            <li key={exercise}>
                                {exercise}: {count} times
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default TrainingStats;