import './Signup.css';

function Signup() {
    return (
        <>
            <div className='signupBody'>
                <form>
                    SIGNUP<br /><br />
                    <input type='text' placeholder='username'></input><br />
                    <input type='email' placeholder='email'></input><br />
                    <input type='password' placeholder='password'></input><br />
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
};

export default Signup;