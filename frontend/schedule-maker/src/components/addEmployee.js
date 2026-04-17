import React, { useState } from "react";
import Availability from "./availability";
import Button from "./button";
import { Colours, FontSizes, Spacing } from "./styles";
import { color } from "@chakra-ui/react";

const AddEmployee = ({ onAddEmployee }) => {
    const [formData, setFormData] = useState({
        name: '',
        id: '',
        role: '',
        availability: {}
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        setError(''); // Clear error when user types
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        if (!formData.name || !formData.id || !formData.role) {
            setError('Please fill in all fields');
            return;
        }

        setLoading(true);
        try {
            const response = await fetch('http://localhost:5000/api/employees', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || errorData.details?.[0] || 'Failed to add employee');
            }

            const newEmployee = await response.json();
            onAddEmployee(newEmployee);
            setFormData({ name: '', id: '', role: '', availability: {} });
            alert('Employee added successfully!');
        } catch (err) {
            setError(err.message);
            console.error('Error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='add-employee-container' style={style.AddEmployee}>
            <form style={style.form} onSubmit={handleSubmit}>
                <input 
                    style={style.textfield} 
                    type='text' 
                    placeholder='Employee Name' 
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    disabled={loading}
                />
                <input 
                    style={style.textfield} 
                    type='text' 
                    placeholder='Employee ID' 
                    name='id'
                    value={formData.id}
                    onChange={handleChange}
                    disabled={loading}
                />
                <select 
                    style={style.select}
                    name='role'
                    value={formData.role}
                    onChange={handleChange}
                    disabled={loading}
                >
                    <option value='' disabled>Select Role</option>
                    <option value='manager'>Manager</option>
                    <option value='assistant'>Assistant</option>
                    <option value='key holder'>Key Holder</option>
                    <option value='stylist'>Stylist</option>
                </select>
                <div style={style.availabilityContainter}>
                    <Availability onAvailabilityChange={(avail) => setFormData(prev => ({...prev, availability: avail}))} />
                </div>
                {error && <p style={style.error}>{error}</p>}
                <Button text={loading ? 'Adding...' : 'Add Employee'} type='submit' disabled={loading} />
            </form>
        </div>
    );
}

export default AddEmployee;

const style = {
    AddEmployee: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        color: 'white',
        backgroundColor: Colours.secondary,
        fontSize: FontSizes.large,
    },
    title: {
        color: Colours.quaternary,
        fontSize: FontSizes.large,
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: Spacing.medium,
        backgroundColor: Colours.primary,
        border: '1px solid black',
        borderRadius: '5px',
        spacebetween: '15px',
    },
    select: {
        margin: Spacing.small,
        padding: Spacing.small,
        fontSize: FontSizes.medium,
        backgroundColor: Colours.teritary,
        border: '1px solid black',
        borderRadius: '5px',
    },
    textfield: {
        margin: Spacing.small,
        padding: Spacing.small,
        fontSize: FontSizes.medium,
    },
    availabilityContainter: {
        margin: Spacing.small,
        padding: Spacing.small,
        fontSize: FontSizes.medium,
    },
    error: {
        color: '#ff6b6b',
        marginTop: '10px',
        fontSize: '14px',
        textAlign: 'center'
    }
};