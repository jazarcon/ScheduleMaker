import Availability from "./availability";
import Button from "./button";
import { Colours, FontSizes, Spacing } from "./styles";

const AddEmployee = () => {
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
