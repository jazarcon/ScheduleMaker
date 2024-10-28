import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {


    return (
        <div className='welcome-container' style={style.Welcome}>
            <h1>Welcome to Schedule Maker</h1>

        </div>
    );
};

export default Welcome;

const style = {
    Welcome: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#282c34',
        color: 'white',
        fontSize: '2rem',
    },
};
