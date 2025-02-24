import axios from "axios";

import Availability from "./availability";
import { useNavigate } from "react-router-dom";
import Button from "./button";
import { Colours, FontSizes, Spacing } from "./styles";

const AddEmployee = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: e.target[0].value,
            id: e.target[1].value,
            role: e.target[2].value,
            availability: e.target[3].value,
        }

        axios.post('http://localhost:8000/api/employees/', data)
            .then(response => {
                console.log('Employee created:', response.data);
                navigate('/employees');
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };
    


    return (
        <div className='add-employee-container' style={style.AddEmployee}>
            <form style={style.form}>
                <input style={style.textfield} type='text' placeholder='Employee Name' />
                <input style={style.textfield} type='text' placeholder='Employee ID' />
                <select style={style.select}>
                    <option value='' disabled>Select Role</option>
                    <option value='manager'>Manager</option>
                    <option value= 'assistant'>Assistant</option>
                    <option value='key holder '>Key Holder</option>
                    <option value='stylist'>Stylist</option>
                </select>
                <div style={style.availabilityContainter}>
                    <Availability />
                </div>
                <Button text='Add Employee' />
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
