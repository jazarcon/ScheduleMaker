import React from 'react';
import { FontSizes, Spacing } from './styles';
function NavBar() {
    return (
        <nav style={styles.nav}>
            <ul style={styles.ul}>
                <li style={styles.li}>Home</li>
                <li style={styles.li}>Schedule</li>
                <li style={styles.li}>Employee</li>
                <li style={styles.li}>Calendar</li>
                <li style={styles.li}>Profile</li>
            </ul>
        </nav>
    )
}

export default NavBar;

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: '100vh',
        width: '15%',
        backgroundColor: 'black',
        color: 'white',
        position: 'fixed',
        top: '15vh',
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
