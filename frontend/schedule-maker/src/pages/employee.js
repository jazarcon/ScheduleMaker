import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import NavBar from '../components/navBar';
import { Colours } from '../components/styles';
import EmployeeList from '../components/employeeList';
import AddEmployee from '../components/addEmployee';

const Employee = () => {
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);

    return (
        <div>
            <NavBar />
            <div style={styles.container}>
                <div style={styles.content}>
                    <Tabs>
                        <TabList>
                            <Tab>Employee List</Tab>
                            <Tab>Add Employee</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                <h1 style={styles.title}>Employee List</h1>
                                <EmployeeList />
                            </TabPanel>
                            <TabPanel>
                                <h1 style={styles.title}>Add Employee</h1>
                                <AddEmployee />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
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
    },
    content: {
        width: '80%',
        backgroundColor: Colours.primary,
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    title: {
        color: Colours.quaternary,
        fontSize: '24px',
        marginBottom: '20px',
    },
};