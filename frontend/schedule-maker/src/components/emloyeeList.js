import { Colours, FontSizes, Spacing } from "./styles";
import { useNavigate } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import Button from "./button";

const EmployeeList = () => {
    const navigate = useNavigate();

    return (
        <div className='employee-list-container' style={style.EmployeeList}>
            <h1 style={style.title}>Employee List</h1>
                <Flex direction='column' alignItems='center' justifyContent='center'>
                    
                    <Button>Add Employee</Button>
                </Flex>
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