import './Login.css';

function Login() {
    return (
        <>
            <div className='loginBody'>
                <form>
                    LOGIN<br /><br />
                    <input type='email' placeholder='email'></input><br /><br />
                    <input type='password' placeholder='password'></input>
                </form>
            </div>
        </>
    )
};

export default Login;