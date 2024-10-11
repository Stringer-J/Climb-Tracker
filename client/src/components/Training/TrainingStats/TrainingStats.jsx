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

    const exerciseData = {};

    workouts.forEach(workout => {
        workout.exercises.forEach(exercise => {
            const name = exercise.name;
            const sets = exercise.sets;
            const reps = exercise.reps;
            const weight = exercise.weight;

            if (!exerciseData[name]) {
                exerciseData[name] = { count: 0, maxSets: 0, maxReps: 0, maxWeight: 0 };
            }

            exerciseData[name].count +=1;

            if (weight > exerciseData[name].maxSets) {
                exerciseData[name].maxSets = sets;
            }

            if (weight > exerciseData[name].maxReps) {
                exerciseData[name].maxReps = reps;
            }

            if (weight > exerciseData[name].maxWeight) {
                exerciseData[name].maxWeight = weight;
            }
        });
    });
    
    return (
        <>
            <div className='trainingStatsBody'>
                TRAINING STATS<br /><br />
                <div># of Workouts: <hr />{workoutCount}</div><br />
                <div>
                    Exercises:<hr /><br />
                    <ul>
                        {Object.entries(exerciseData).map(([exercise, { count, maxSets, maxReps, maxWeight }]) => (
                            <li key={exercise}>
                                {exercise}:<br />
                                {count} times<br />
                                Max Sets: {maxSets}<br />
                                Max Reps: {maxReps}<br />
                                Max Weight: {maxWeight} lbs<br /><br />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default TrainingStats;