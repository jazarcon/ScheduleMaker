import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const WeekTable = ({ week, employees }) => {

    const MNGRShifts = ["11:00AM-7:00PM"];
    const ASMShifts = ["9:30AM-1:30PM", "9:30AM-5:30PM", "1:30PM-5:30PM", "5:30PM-9:30PM"];
    const KHShifts = ["9:30AM-1:30PM", "9:30AM-3:30PM", "9:30AM-5:30PM", "3:30PM-9:30PM", "5:30PM-9:30PM"];
    const SShifts = ["11:00AM-3:00PM", "1:30PM-5:30PM", "5:30PM-9:30PM"];

    const shiftTypes = {
        Manager: MNGRShifts,
        Assistant: ASMShifts,
        KeyHolder: KHShifts,
        Sales: SShifts
    };

    const isShiftCovered = (availability, shift) => {
        const [shiftStart, shiftEnd] = shift.split('-').map(time => new Date(`1970-01-01T${time}`));
        const availableTimes = availability.map(time => new Date(`1970-01-01T${time}`));
    
        // Check if the availability covers the entire shift range
        return availableTimes.some(time => time <= shiftStart) && availableTimes.some(time => time >= shiftEnd);
    };

    const assignShifts = (employees, week) => {
        const assignments = {};

        employees.forEach(employee => {
            assignments[employee.name] = {};

            week.forEach(day => {
                const shifts = shiftTypes[employee.role];
                if (shifts) {
                    const availableShifts = shifts.filter(shift => isShiftCovered(employee.available[day] || [], shift));
                    assignments[employee.name][day] = availableShifts.length > 0 ? availableShifts[0] : ' ';
                } else {
                    assignments[employee.name][day] = ' ';
                }
            });
        });

        return assignments;
    };

    const assignments = assignShifts(employees, week);

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh" bg="gray.50">
            <Box bg="white" p={4} borderRadius="md" boxShadow="md" width="80%">
                <Table variant="simple" size="md" className="week-table" style={styles.tableLayout}>
                    <Thead>
                        <Tr>
                            <Th style={styles.th}>Employee</Th>
                            {week.map((day) => (
                                <Th key={day} style={styles.th}>{day}</Th>
                            ))}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {employees.map((employee) => (
                            <Tr key={employee.name}>
                                <Td style={styles.td} fontWeight="bold">{employee.name}</Td>
                                {week.map((day) => (
                                    <Td key={`${employee.name}-${day}`} style={styles.td}>
                                        {assignments[employee.name][day]}
                                    </Td>
                                ))}
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
        </Box>
    );
}

export default WeekTable;

const styles = {
    tableLayout: {
        tableLayout: 'fixed',
        width: '100%',
    },
    th: {
        border: '1px solid',
        borderColor: 'gray.200',
        width: '14.28%', // Ensure all columns have the same width
    },
    td: {
        border: '1px solid',
        borderColor: 'gray.200',
        width: '14.28%', // Ensure all columns have the same width
    },
};