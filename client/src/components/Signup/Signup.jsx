import './Signup.css';

function Signup() {
    return (
        <>
            <div className='signupBody'>
                <form>
                    SIGNUP<br /><br />
                    <input type='text' placeholder='username'></input><br /><br />
                    <input type='email' placeholder='email'></input><br /><br />
                    <input type='password' placeholder='password'></input>
                </form>
            </div>
        </>
    )
};

export default Signup;