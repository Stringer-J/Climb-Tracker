import './Signup.css';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER_MUTATION } from '../../utils/mutations';

function Signup() {
    const [signupFormData, setSignupFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [addUser] = useMutation(ADD_USER_MUTATION);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSignupFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        console.log(signupFormData);

        try {
            const { data: addUserData } = await addUser({ variables: {...signupFormData} });
            console.log('User created:', addUserData.addUser);
        } catch (err) {
            console.error('Error creating user:', err);
        }
    };

    return (
        <>
            <div className='signupBody'>
                <form onSubmit={handleSignupSubmit}>
                    SIGNUP<br /><br />
                    <input 
                        type='text'
                        name='username'
                        placeholder='username'
                        value={signupFormData.username}
                        onChange={handleInputChange} 
                    /><br />
                    <input 
                        type='email'
                        name='email'
                        placeholder='email'
                        value={signupFormData.email}
                        onChange={handleInputChange} 
                    /><br />
                    <input 
                        type='password'
                        name='password'
                        placeholder='password'
                        value={signupFormData.password}
                        onChange={handleInputChange} 
                    /><br />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </>
    )
};

export default Signup;