import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Tabs from '@chakra-ui/react';
import NavBar from '../components/navBar';
import { Colours } from '../components/styles';

const Employee = () => {
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);


    return (
        <div>
            <NavBar />
            <div style={styles.container}>
                <div style={styles.content}>

                </div>

            </div>

        </div>
    );
}

export default Employee;

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
        width: '100%',
        color: 'white',
        backgroundColor: Colours.secondary,
        fontSize: 'large',
    },
    title: {
        color: 'white',
        fontSize: 'large',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: Colours.primary,
        border: '1px solid black',
        borderRadius: '5px',
    },

};
// List of all employees