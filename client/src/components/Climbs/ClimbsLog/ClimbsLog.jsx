import { useState } from 'react';
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

function ClimbsLog() {
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setClimb((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleLogClimb = (e) => {
        e.preventDefault();
        console.log('Logging Climb:', climb);
        setClimb([]);
    }

    return (
        <>
            <div className='climbsLogBody'>
                LOG A CLIMB<br /><br />
                <form onSubmit={handleLogClimb}>
                    <input
                        type='text'
                        name='name'
                        placeholder='Name'
                    /><br />
                    <input
                        type='date'
                        name='date'
                        placeholder='Date'
                    /><br />
                    <input
                        type='text'
                        name='area'
                        placeholder='Area'
                    /><br />
                    <input
                        type='text'
                        name='subarea'
                        placeholder='Sub-Area'
                    /><br />
                    <input
                        type='text'
                        name='type'
                        placeholder='Type'
                    /><br />
                    <select
                        name='grade'
                    >
                        <option value='' disabled>Select Grade</option>
                        {gradeOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </select><br />
                    <input
                        type='text'
                        name='length'
                        placeholder='Length'
                    /><br />
                    <input
                        type='text'
                        name='numAttempts'
                        placeholder='Number Of Attempts'
                    /><br />
                    <input
                        type='text'
                        name='comments'
                        placeholder='Comments'
                    /><br />
                    <button className='unusedButton'>LOG CLIMB</button>
                </form>
            </div>
        </>
    );
};

export default ClimbsLog;