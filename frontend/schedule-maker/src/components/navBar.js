import React from 'react';
import { Colours, FontSizes, Spacing } from './styles';
import { useNavigate } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
function NavBar() {
    let navigate = useNavigate();

    return (
        <Flex style={styles.nav}>
            <ul style={styles.ul}>
                <li style={styles.li} onClick={() => navigate('/')}>Welcome</li>
                <li style={styles.li} onClick={() => navigate('/schedule')}>Schedule</li>
                <li style={styles.li} onClick={() => navigate('/calender')}>Calender</li>
                <li style={styles.li} onClick={() => navigate('/employee')}>Employee</li>
                <li style={styles.li} onClick={() => navigate('/profile')}>Profile</li>
            </ul>
        </Flex>

    )
}

export default NavBar;

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: '100%',
        width: '15%',
        backgroundColor: Colours.primary,
        color: 'white',
        position: 'fixed',
        top: '100px',
        left: 0,
        padding: '20px 0',
        zIndex: 1,
    },
    ul: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '50%',
        flexDirection: 'column',

    },
    li: {
        listStyleType: 'none',
        fontSize: FontSizes.medium,
    }
}
