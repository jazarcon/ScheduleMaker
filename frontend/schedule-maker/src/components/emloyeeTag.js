import React from "react";
import { Flex, Card } from "@chakra-ui/react";
import { Colours, FontSizes, Spacing } from "./styles";

const EmployeeTag = ({ employee }) => {
    return (
        <Card style={style.employeeTag}>
            <Flex direction='column' alignItems='center' justifyContent='center'>
                <h1>{employee.name}</h1>
                <p>{employee.role}</p>
            </Flex>
        </Card>
    );
}

export default EmployeeTag;

const style = {
    employeeTag: {
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
}