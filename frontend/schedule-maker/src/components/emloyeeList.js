import { Colours, FontSizes, Spacing } from "./styles";
import { useNavigate } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import Button from "./button";
import EmployeeTag from "./emloyeeTag";

const EmployeeList = () => {
    const navigate = useNavigate();

    const employees = [
        {
            name: 'John Doe',
            id: '15001',
            role: 'Manager',
        },
        {
            name: 'Jane Doe',
            id: '15002',
            role: 'Assistant',
        },
        {
            name: 'Rick Roll',
            id: '15003',
            role: 'Key Holder',
        },
        {
            name: 'Sponge Bob',
            id: '15004',
            role: 'Stylist',
        }
    ]

    return (
        <div className='employee-list-container' style={style.EmployeeList}>
                <Flex direction='column' alignItems='center' justifyContent='center' >
                    {employees.map((employee) => (
                        <EmployeeTag key={employee.id} employee={employee} />
                    ))}
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
        overflowY: 'auto'
    },
    list:{
        width: '100%',
    }
};