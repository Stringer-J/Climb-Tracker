import { useState, useContext } from 'react';
import { AuthContext } from '../../../utils/AuthContext';
import { useMutation } from '@apollo/client';
import { ADD_CLIMB } from '../../../utils/mutations';

import './ClimbsLog.css';

const gradeOptions = [
    { value: 'VB', label: 'VB' },
    { value: 'V0', label: 'V0' },
    { value: 'V1', label: 'V1' },
    { value: 'V2', label: 'V2' },
    { value: 'V3', label: 'V3' },
    { value: 'V4', label: 'V4' },
    { value: 'V5', label: 'V5' },
    { value: 'V6', label: 'V6' },
    { value: 'V7', label: 'V7' },
    { value: 'V8', label: 'V8' },
    { value: 'V9', label: 'V9' },
    { value: 'V10', label: 'V10' },
    { value: 'V11', label: 'V11' },
    { value: 'V12', label: 'V12' },
    { value: 'V13', label: 'V13' },
    { value: 'V14', label: 'V14' },
    { value: 'V15', label: 'V15' },
    { value: 'V16', label: 'V16' },
    { value: 'V17', label: 'V17' },
];

const typeOptions = [
    { value: 'boulder', label: 'Boulder' },
    { value: 'sport', label: 'Sport' },
    { value: 'trad', label: 'Trad' },
];

function ClimbsLog() {
    const { user } = useContext(AuthContext);
    const [addClimb] = useMutation(ADD_CLIMB);

    const [climb, setClimb] = useState({
        name: '',
        date: '',
        area: '',
        subArea: '',
        type: '',
        grade: '',
        length: '',
        numAttempts: '',
        comments: '',
    });

    const initialClimbForm = {
        name: '',
        date: '',
        area: '',
        subArea: '',
        type: '',
        grade: '',
        length: '',
        numAttempts: '',
        comments: '',
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setClimb((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleLogClimb = async (e) => {
        e.preventDefault();
        console.log('Logging Climb:', climb);
        console.log('User:', user._id);

        const requiredData = [ 'name', 'date', 'area', 'type', 'grade' ];

        for (const data of requiredData) {
            if (!climb[data]) {
                console.error(`Field ${data} is required`);
                return;
            }
        }

        try {
            const res = await addClimb({
                variables: {
                    input: {
                        ...climb,
                        userId: user._id,
                    },
                },
            });

            console.log('Climb Logged:', res.data.addClimb);
            setClimb(initialClimbForm);
        } catch (err) {
            console.error('Error logging climb:', err)
        }
    };

    return (
        <>
            <div className='climbsLogBody'>
                LOG A CLIMB<br /><br />
                <form onSubmit={handleLogClimb}>
                    <label>
                        <span style={{ color: 'red'}}>*</span>
                        <input
                            type='text'
                            name='name'
                            placeholder='Name'
                            value={climb.name}
                            onChange={handleInputChange}
                        />
                    </label><br />
                    <label>
                        <span style={{ color: 'red'}}>*</span>
                        <input
                            type='date'
                            name='date'
                            value={climb.date}
                            onChange={handleInputChange}
                        />
                    </label><br />
                    <label>
                        <span style={{ color: 'red'}}>*</span>
                        <input
                            type='text'
                            name='area'
                            placeholder='Area'
                            value={climb.area}
                            onChange={handleInputChange}
                        />
                    </label><br />
                    <input
                        type='text'
                        name='subArea'
                        placeholder='Sub-Area'
                        value={climb.subArea}
                        onChange={handleInputChange}
                    /><br />
                    <label>
                        <span style={{ color: 'red'}}>*</span>
                            <select
                                name='type'
                                value={climb.type}
                                onChange={handleInputChange}
                            >
                                <option value='' disabled>Select Type</option>
                                {typeOptions.map((opt) => (
                                    <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </option>
                                ))}
                            </select>
                    </label><br />
                    <label>
                        <span style={{ color: 'red'}}>*</span>
                        <select
                            name='grade'
                            value={climb.grade}
                            onChange={handleInputChange}
                        >
                            <option value='' disabled>Select Grade</option>
                            {gradeOptions.map((opt) => (
                                <option key={opt.value} value={opt.value}>
                                    {opt.label}
                                </option>
                            ))}
                        </select>
                    </label><br />
                    <input
                        type='text'
                        name='length'
                        placeholder='Length'
                        value={climb.length}
                        onChange={handleInputChange}
                    /><br />
                    <input
                        type='text'
                        name='numAttempts'
                        placeholder='Number Of Attempts'
                        value={climb.numAttempts}
                        onChange={handleInputChange}
                    /><br />
                    <input
                        type='text'
                        name='comments'
                        placeholder='Comments'
                        value={climb.comments}
                        onChange={handleInputChange}
                    /><br />
                    <button className='usedButton'>LOG CLIMB</button>
                </form>
            </div>
        </>
    );
};

export default ClimbsLog;