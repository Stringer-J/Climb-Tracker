import './Login.css';
import { useState, useContext } from 'react';
import { useQuery } from '@apollo/client';
import { GET_SINGLE_USER } from '../../utils/queries';
import { AuthContext } from '../../utils/AuthContext.jsx';

function Login() {
    const [loginFormData, setLoginFormData] = useState({
        email: '',
        password: '',
    });

    const { login } = useContext(AuthContext);

    const { data } = useQuery(GET_SINGLE_USER, {
        variables: { email: loginFormData.email },
        skip: !loginFormData.email
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log('Login Form Data:', loginFormData);
        try {
            if (data && data.getUser) {
                console.log('User found:', data.getUser);
                login(data.getUser);
            }
        } catch (err) {
            console.error('Error finding user:', err);
        }
    };

    return (
        <>
            <div className='loginBody'>
                <form onSubmit={handleLoginSubmit}>
                    LOGIN<br /><br />
                    <input 
                        type='email'
                        name='email'
                        placeholder='email'
                        value={loginFormData.email}
                        onChange={handleInputChange} 
                    /><br />
                    <input 
                        type='password'
                        name='password'
                        placeholder='password'
                        value={loginFormData.password}
                        onChange={handleInputChange} 
                    /><br />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </>
    )
};

export default Login;