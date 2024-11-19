import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabList, TabPanels, Tab, TabPanel, color, background, position } from '@chakra-ui/react';
import NavBar from '../components/navBar';
import { Colours, FontSizes } from '../components/styles';
import EmployeeList from '../components/emloyeeList';
import AddEmployee from '../components/addEmployee';

const Employee = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (index) => {
        setSelectedTab(index);
    };

    return (
        <div>
            <NavBar />
            <div style={styles.container}>
                <div style={styles.content}>
                    <Tabs align='center' onChange={handleTabChange}>
                        <TabList align='center' style={styles.tabsection}>
                            <Tab style={selectedTab === 0 ? styles.selectedTab : styles.tab}>Employee List</Tab>
                            <Tab style={selectedTab === 1 ? styles.selectedTab : styles.tab}>Add Employee</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                <EmployeeList />
                            </TabPanel>
                            <TabPanel>
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
        marginTop: '100px',
    },
    title: {
        color: Colours.quaternary,
        fontSize: FontSizes.large,
    },
    tabsection: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: Colours.primary,
        borderRadius: '5px',
        width: '100%',
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