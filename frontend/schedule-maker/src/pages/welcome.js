import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import { useNavigate } from 'react-router-dom';
import { Colours, FontSizes, Spacing } from '../components/styles';

const Welcome = () => {
    const [text] = useTypewriter({
        words: ['Welcome to Schedule Maker'],
        loop: 0,
        cursorStyle: '|',
        typeSpeed: 70,
        deleteSpeed: 0,
    });


    return (
        <div>
            <div className='welcome-container' style={style.Welcome}>
                <h1>{text}</h1>
            </div>
            <h1>About</h1>
        </div>

    );
};

export default Welcome;

const style = {
    Welcome: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '75vh',
        width: '100%',
        color: 'white',
        backgroundColor: Colours.secondary,
        fontSize: FontSizes.large,
    },
};
