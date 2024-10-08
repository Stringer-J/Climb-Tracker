import './TrainingPast.css';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../utils/AuthContext';
import { useQuery } from '@apollo/client';
import { GET_WORKOUTS } from '../../../utils/queries';

function TrainingPast() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const { loading, error, data } = useQuery(GET_WORKOUTS, {
        variables: { userId: user._id },
        skip: !user,
    });

    console.log(data);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const handleDateClick = (workout) => {
        navigate('/trainingPastDetails', { state: { workout }});
    };

    return (
        <>
            <div className='trainingPastBody'>
                TRAINING PAST<br /><br />
                {data.getWorkouts.length > 0 ? (
                    <ul>
                        {data.getWorkouts.map((workout, index) => (
                            <li key={index}>
                                <button className='usedButton' onClick={() => handleDateClick(workout)}>
                                    {new Date(Number(workout.date)).toISOString().slice(0, 10)}
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No workouts logged</p>
                )}
            </div>
        </>
    );
};

export default TrainingPast;