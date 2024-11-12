import { Colours, FontSizes, Spacing } from "../components/styles";

const Signup = () => {
    return (
        <div className='signup-container' style={style.Signup}>
            <form>
                <h1>Signup</h1>
                <input type='text' placeholder='Username' />
                <input type='text' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <input type='password' placeholder='Confirm Password' />
                <button>Signup</button>
            </form>
        </div>
    );
};

export default Signup;

const style = {
    Signup: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        color: 'white',
        backgroundColor: Colours.secondary,
        fontSize: FontSizes.large,
    },
};
