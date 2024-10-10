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
    
    return (
        <>
            <div className='trainingStatsBody'>
                TRAINING STATS<br /><br />
                <div># of Workouts: {workoutCount}</div>
            </div>
        </>
    );
};

export default TrainingStats;