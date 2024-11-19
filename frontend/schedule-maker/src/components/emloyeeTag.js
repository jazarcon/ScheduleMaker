import React from "react";
import { Flex, Box, Stack, Text, Button, Avatar, IconButton } from "@chakra-ui/react";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import { Colours } from './styles'; // Ensure Colours is correctly imported


const EmployeeTag = ({ employee }) => {
    return (
        <Box 
            borderWidth='1px' 
            borderRadius='lg' 
            overflow='hidden' 
            p={4} 
            m={2}
            width={750}
        >
            <Stack style={styles.tag}>
                <Flex direction='row' alignItems='center' justifyContent='flex-start'>
                    <Avatar 
                        name={employee.name} 
                        mr={25}
                        borderRadius='25px'
                        background={Colours.teritary}
                        />
                    <Flex direction='column' alignItems='flex-start' justifyContent='flex-start'>
                        <Text style={styles.tagTitle}>{employee.name}</Text>
                        <Text style={styles.tagText}>{employee.id}</Text>
                        <Text style={styles.tagText}>{employee.role}</Text>
                    </Flex>    
                    <IconButton
                        aria-label="Edit"
                        icon={<AiOutlineEdit />}
                        variant="outline"
                        ml="auto"
                        size="xl"
                        height='75px'
                        width='50px'
                        background={Colours.teritary}  
                        borderRadius={10}
                    />
                    <IconButton
                        aria-label="Delete"
                        icon={<AiFillDelete />}
                        variant="outline"
                        ml={2}
                        size="lg"
                        height='75px'
                        width='50px'
                        background={Colours.teritary}
                        borderRadius={10}
                    />
                </Flex>
            </Stack>
        </Box>
    );
}

export default EmployeeTag;

const styles = {
    tag: {
        margin: '10px',
        padding: '10px',
        backgroundColor: Colours.primary,
        color: 'black',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    tagTitle: {
        margin: '0',
        padding: '0',
        color: Colours.quaternary,
        fontSize: '50px', // Set font size for the name
    },
    tagText: {
        margin: '0',
        padding: '0',
        color: Colours.quaternary,
        fontSize: '20px', // Set font size for the id and role
        marginRigth: 'auto',
        lineHeight: '1.5',
    },
};