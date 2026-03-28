import React, { useState, useEffect } from "react";
import { Colours, FontSizes, Spacing } from "./styles";
import { useNavigate } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import Button from "./button";
import EmployeeTag from "./emloyeeTag";

const EmployeeList = ({ employees }) => {
    const navigate = useNavigate();
    const [employeeList, setEmployeeList] = useState(employees || []);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await fetch('http://localhost:5000/api/employees');
            
            if (!response.ok) {
                throw new Error('Failed to fetch employees');
            }
            
            const data = await response.json();
            setEmployeeList(data);
        } catch (err) {
            setError(err.message);
            console.error('Error:', err);
            // Fallback: show empty list if backend is down
            setEmployeeList([]);
        } finally {
            setLoading(false);
        }
    };

    // Update list when prop changes (when new employee is added)
    useEffect(() => {
        if (employees && employees.length > employeeList.length) {
            setEmployeeList(employees);
        }
    }, [employees]);

    return (
        <div className='employee-list-container' style={style.EmployeeList}>
            {error && <p style={style.error}>Error: {error}</p>}
            {loading ? (
                <p style={style.loading}>Loading employees...</p>
            ) : employeeList.length === 0 ? (
                <p style={style.noEmployees}>No employees yet. Add one to get started!</p>
            ) : (
                <Flex direction='column' alignItems='center' justifyContent='center'>
                    {employeeList.map((employee) => (
                        <EmployeeTag key={employee.id} employee={employee} />
                    ))}
                </Flex>
            )}
        </div>
    );
}

export default EmployeeList;

const style = {
    EmployeeList: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
        width: '100%',
        color: 'white',
        backgroundColor: Colours.secondary,
        fontSize: FontSizes.large,
        overflowY: 'auto'
    },
    list:{
        width: '100%',
    },
    error: {
        color: '#ff6b6b',
        marginTop: '20px',
        fontSize: '16px'
    },
    loading: {
        color: Colours.quaternary,
        fontSize: FontSizes.medium,
        marginTop: '20px'
    },
    noEmployees: {
        color: Colours.quaternary,
        fontSize: FontSizes.medium,
        marginTop: '20px'
    }
};