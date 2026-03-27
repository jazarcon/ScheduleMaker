import React, { useState } from "react";
import Availability from "./availability";
import Button from "./button";
import { Colours, FontSizes, Spacing } from "./styles";

const AddEmployee = ({ onAddEmployee }) => {
    const [formData, setFormData] = useState({
        name: '',
        id: '',
        role: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (formData.name && formData.id && formData.role) {
            onAddEmployee(formData);
            setFormData({ name: '', id: '', role: '' });
        } else {
            alert('Please fill in all fields');
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
                />
                <input 
                    style={style.textfield} 
                    type='text' 
                    placeholder='Employee ID' 
                    name='id'
                    value={formData.id}
                    onChange={handleChange}
                />
                <select 
                    style={style.select}
                    name='role'
                    value={formData.role}
                    onChange={handleChange}
                >
                    <option value='' disabled>Select Role</option>
                    <option value='manager'>Manager</option>
                    <option value='assistant'>Assistant</option>
                    <option value='key holder'>Key Holder</option>
                    <option value='stylist'>Stylist</option>
                </select>
                <div style={style.availabilityContainter}>
                    <Availability />
                </div>
                <Button text='Add Employee' type='submit' />
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
    }
};