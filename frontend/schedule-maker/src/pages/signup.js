import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import { Colours, FontSizes, Spacing } from "../components/styles";

const Signup = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            username: event.target[0].value,
            email: event.target[1].value,
            store: event.target[2].value,
            password: event.target[3].value,
            confirmPassword: event.target[4].value,
        }

        axios.post('http://localhost:8000/api/signup/', data)
            .then(response => {
                console.log(response);
                navigate('/employee');
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className='signup-container' style={style.Signup}>
            <h1 style={style.title}>Signup</h1>
            <form style={style.form} onSubmit={handleSubmit}>
                <input style={style.textfield} type='text' placeholder='Username' />
                <input style={style.textfield} type='text' placeholder='Store' />
                <input style={style.textfield} type='password' placeholder='Password' />
                <input style={style.textfield} type='password' placeholder='Confirm Password' />
                <Button text='Signup' onClick={() => navigate('/employee')} />
            </form>
        </div>
    );
};

export default Signup;

const style = {
    Signup: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
        width: '100vw',
        color: 'white',
        backgroundColor: Colours.secondary,
        fontSize: FontSizes.large,
    },
    title: {
        color: Colours.quaternary,
        fontSize: FontSizes.large,
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: Spacing.medium,
        backgroundColor: Colours.primary,
        border: '1px solid black',
        borderRadius: '5px',
        spacebetween: '15px',
    },
    textfield: {
        margin: Spacing.small,
        padding: Spacing.small,
        fontSize: FontSizes.medium,
    },
};
