import { Colours, FontSizes, Spacing } from "./styles";
import { useNavigate } from "react-router-dom";

const EmployeeList = () => {
    const navigate = useNavigate();

    return (
        <div className='employee-list-container' style={style.EmployeeList}>
            <h1 style={style.title}>Employee List</h1>
            <form style={style.form}>
                <input style={style.textfield} type='text' placeholder='Employee Name' />
                <input style={style.textfield} type='text' placeholder='Employee ID' />
                <input style={style.textfield} type='text' placeholder='Employee Position' />
                <input style={style.textfield} type='text' placeholder='Employee Availability' />
                <button style={style.button} onClick={() => navigate('/employee')}>Add Employee</button>
            </form>
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
    textfield: {
        margin: Spacing.small,
        padding: Spacing.small,
        fontSize: FontSizes.medium,
    },
    button: {
        margin: Spacing.small,
        padding: Spacing.small,
        fontSize: FontSizes.medium,
        backgroundColor: Colours.quaternary,
        color: Colours.secondary,
        border: 'none',
        borderRadius: '5px',
    },
};