import { useState, useContext } from 'react';
import { AuthContext } from '../../../utils/AuthContext';
import { useMutation } from '@apollo/client';
import { ADD_WORKOUT } from '../../../utils/mutations';

import './TrainingAdd.css';

const exerciseOptions = [
    { value: 'push-ups', label: 'Push-Ups'},
    { value: 'pull-ups', label: 'Pull-Ups'},
    { value: 'dips', label: 'Dips'},
    { value: 'squats', label: 'Squats'},
    { value: 'shoulder-press', label: 'Shoulder Press'},
    { value: 'calf-raises', label: 'Calf Raises'},
    { value: 'curls', label: 'Curls'},
    { value: 'chin-ups', label: 'Chin-Ups'},
    { value: 'hangs', label: 'Hangs'},
    { value: 'reverse-flys', label: 'Reverse Flys'},
    { value: 'ab-roller', label: 'Ab Roller'},
    { value: 'face-pulls', label: 'Face Pulls'},
    { value: 'run', label: 'Run'},
    { value: 'foot-raises', label: 'Foot Raises'},
    { value: 'weighted-butterflies', label: 'Weighted Butterflies'},
];


function Training() {
    const { user } = useContext(AuthContext);
    const [addWorkout] = useMutation(ADD_WORKOUT);

    const [exercise, setExercise] = useState({
        date: '',
        exercise: '',
        sets: '',
        reps: '',
        weight: '',
    });

    const [exerciseList, setExerciseList] = useState([]);
    const [workoutDate, setWorkoutDate] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setExercise((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleDate = (e) => {
        e.preventDefault();
        if (exercise.date) {
            setWorkoutDate(true);
        }
    };

    const handleAddExercise = (e) => {
        e.preventDefault();
        if (workoutDate && exercise.exercise && exercise.sets && exercise.reps && exercise.weight) {
            const selectedExercise = exerciseOptions.find(opt => opt.value === exercise.exercise);
            const exerciseToAdd = {
                ...exercise,
                exercise: selectedExercise ? selectedExercise.label : exercise.exercise,
            };
            setExerciseList((prevData) => [...prevData, exerciseToAdd]);
            setExercise({ date: exercise.date, exercise: '', sets: '', reps: '', weight: '' });
        };
    };

    const handleSubmitExerciseList = async (e) => {
        e.preventDefault();
        console.log('Submitting List:', exerciseList);

        try {
            const res = await addWorkout({
                variables: {
                    userId: user._id,
                    date: exercise.date,
                    exercises: exerciseList.map(({ exercise, sets, reps, weight }) => ({
                        name: exercise,
                        sets: parseInt(sets),
                        reps: parseInt(reps),
                        weight: parseFloat(weight),
                    })),
                },
            });

            console.log('Workout submitted:', res.data.addWorkout);
            setExerciseList([]);
            setWorkoutDate(false);
        } catch (err) {
            console.error('Error submitting workout:', err)
        }
    };

    return (
        <>
            <div className='trainingBody'>
                <div className='trainingLeft'>
                    {!workoutDate ? (
                        <form onSubmit={handleDate}>
                            <input
                                type='date'
                                name='date'
                                placeholder='date'
                                value={exercise.date}
                                onChange={handleInputChange}
                            /><br />
                            <button className='usedButton' type='submit'>Set Date</button>
                        </form>
                    ) : (
                        <div>
                            <p>{exercise.date}</p>
                    <form onSubmit={handleAddExercise}>
                        <select
                            name='exercise'
                            value={exercise.exercise}
                            onChange={handleInputChange}
                        >
                            <option value='' disabled>Select Exercise</option>
                            {exerciseOptions.map((opt) => (
                                <option key={opt.value} value={opt.value}>
                                    {opt.label}
                                </option>
                            ))}
                        </select><br />
                        <input
                            type='number'
                            name='sets'
                            placeholder='sets'
                            min='1'
                            value={exercise.sets}
                            onChange={handleInputChange}
                        /><br />
                        <input
                            type='number'
                            name='reps'
                            placeholder='reps'
                            min='1'
                            value={exercise.reps}
                            onChange={handleInputChange}
                        /><br />
                        <input
                            type='number'
                            name='weight'
                            placeholder='weight'
                            min='0'
                            step='0.1'
                            value={exercise.weight}
                            onChange={handleInputChange}
                        /><br />
                        <button className='usedButton' onClick={handleAddExercise}>Add Exercise</button><br /><br />
                    </form>
                </div>
                    )}
                </div>
                <div className='trainingRight'>
                    <ul>
                        {exerciseList.map((ex, index) => (
                            <li key={index}>
                                <hr />{ex.exercise}<br /><hr />
                                Sets: {ex.sets}<br />
                                Reps: {ex.reps}<br />
                                Weight: {ex.weight} lbs<br /><hr /><br />
                            </li>
                        ))}
                    </ul>
                    {exerciseList.length > 0 && (
                        <button className='usedButton' onClick={handleSubmitExerciseList}>Submit Workout</button>
                    )}
                </div>
            </div>
        </>
    );
};

export default Training;