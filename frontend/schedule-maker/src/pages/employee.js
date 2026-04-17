import React, { useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import NavBar from '../components/navBar';
import { Colours, FontSizes } from '../components/styles';
import EmployeeList from '../components/emloyeeList';
import AddEmployee from '../components/addEmployee';

const Employee = () => {
    const [employees, setEmployees] = useState([

    ]);
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (index) => {
        setSelectedTab(index);
    };

    const addNewEmployee = (newEmployee) => {
        setEmployees(prev => [...prev, newEmployee]);
        setSelectedTab(0);
    };

    return (
        <div>
            <NavBar />
            <div style={styles.container}>
                <div style={styles.content}>
                    <Tabs align='center' onChange={handleTabChange} style={styles.tabs}>
                        <TabList align='center' style={styles.tabsection}>
                            <Tab style={selectedTab === 0 ? styles.selectedTab : styles.tab}>Employee List</Tab>
                            <Tab style={selectedTab === 1 ? styles.selectedTab : styles.tab}>Add Employee</Tab>
                        </TabList>

                        <TabPanels style={styles.tabPanels}>
                            <TabPanel style={styles.tabPanel}>
                                <EmployeeList employees={employees} />
                            </TabPanel>
                            <TabPanel style={styles.tabPanel}>
                                <AddEmployee onAddEmployee={addNewEmployee} />
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
        justifyContent: 'center',
        flexDirection: 'column',
        display: 'flex',
        overflow: 'scroll'
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colours.secondary,
        margin: 0, // Remove any default margin
        flex: 1, // Ensure it takes up the remaining space in the container
        width: '100vw',
        height: '100%',
        paddingTop: '100px',
    },
    title: {
        color: Colours.quaternary,
        fontSize: FontSizes.large,
    },
    tabs: {
        width: '100%',
        maxWidth: '1000px',
    },
    tabsection: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: Colours.primary,
        borderRadius: '5px',
        width: '100%',
        maxWidth: '1000px',
    },
    tabPanels: {
        width: '100%',
        maxWidth: '1000px',
        minHeight: '450px',
        paddingTop: '20px',
    },
    tabPanel: {
        width: '100%',
        minHeight: '400px',
    },
    tab: {
        color: Colours.quaternary,
        fontSize: FontSizes.medium,
        backgroundColor: Colours.primary,
        border: 'none',
        borderRadius: '5px',
    },
    selectedTab: {
        color: Colours.quaternary,
        fontSize: FontSizes.medium,
        backgroundColor: '#5688c7',
        border: 'none',
        borderRadius: '5px',
    }
};