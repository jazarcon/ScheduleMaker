import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const [text] = useTypewriter({
        words: ['Welcome to Schedule Maker'],
        loop: 0,
        cursorStyle: '|',
        typeSpeed: 70,
        deleteSpeed: 0,
    });


    return (
        <div className='welcome-container' style={style.Welcome}>
            <h1>{text}</h1>

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
