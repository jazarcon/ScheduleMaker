import { Colours, FontSizes, Spacing } from "./styles";
import { Flex } from "@chakra-ui/react";
import Button from "./button";
import EmployeeTag from "./emloyeeTag";

const EmployeeList = ({ employees = [] }) => {
    const navigate = useNavigate();

    return (
        <div className='employee-list-container' style={style.EmployeeList}>
            <Flex direction='column' alignItems='center' justifyContent='center' >
                {employees.length > 0 ? (
                    employees.map((employee) => (
                        <EmployeeTag key={employee.id} employee={employee} />
                    ))
                ) : (
                    <div style={{ color: 'white', padding: '16px' }}>No employees found yet.</div>
                )}
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