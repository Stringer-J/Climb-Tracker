import './Profile.css';
import { AuthContext } from '../../utils/AuthContext';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Profile() {
    const [exerciseFormData, setExerciseFormData] = useState({
        date: '',
        exercise: '',
        sets: '',
        reps: '',
        weight: '',
    });

    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setExerciseFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <>
            <div className='profileBody'>
                <div className='profileLeft'>
                    PROFILE<br /><br />
                    <form>
                        <input
                            type='date'
                            name='date'
                            placeholder='date'
                            value={exerciseFormData.date}
                            onChange={handleInputChange}
                        /><br />
                        <input
                            type='text'
                            name='exercise'
                            placeholder='exercise'
                            value={exerciseFormData.exercise}
                            onChange={handleInputChange}
                        /><br />
                        <input
                            type='number'
                            name='sets'
                            placeholder='sets'
                            min='1'
                            value={exerciseFormData.sets}
                            onChange={handleInputChange}
                        /><br />
                        <input
                            type='number'
                            name='reps'
                            placeholder='reps'
                            min='1'
                            value={exerciseFormData.reps}
                            onChange={handleInputChange}
                        /><br />
                        <input
                            type='number'
                            name='weight'
                            placeholder='weight'
                            min='0'
                            step='0.1'
                            value={exerciseFormData.weight}
                            onChange={handleInputChange}
                        /><br />
                        <button type='submit'>Submit</button>
                    </form><br /><br />
                    <button onClick={handleLogout}>Logout</button>
                </div>
                <div className='profileRight'>
                    
                </div>
            </div>
        </>
    );
};

export default Profile;