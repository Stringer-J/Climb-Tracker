import './Login.css';

function Login() {
    return (
        <>
            <div className='loginBody'>
                <form>
                    LOGIN<br /><br />
                    <input type='email' placeholder='email'></input><br />
                    <input type='password' placeholder='password'></input><br />
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
};

export default Login;