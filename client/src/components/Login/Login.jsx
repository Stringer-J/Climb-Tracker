import './Login.css';
import { useState } from 'react';

function Login() {
    const [loginFormData, setLoginFormData] = useState({
        email: '',
        password: '',
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
        console.log(loginFormData);
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