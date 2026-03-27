import React from 'react';
import NavBar from '../components/navBar';
import { Colours } from '../components/styles';
import WeekTable from '../components/weekTable';
import { Button } from '@chakra-ui/react';

function Schedule() {
  const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const [schedule, setSchedule] = React.useState({});
  const employees = [
    {
        name: 'John Doe',
        id: '15001',
        role: 'Manager',
        available: {
            Monday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
            Tuesday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
            Wednesday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
            Thursday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
            Friday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
            Saturday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
            Sunday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
        }
    },
    {
        name: 'Jane Doe',
        id: '15002',
        role: 'Assistant',
        available: {
          Monday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
          Tuesday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
          Wednesday: [],
          Thursday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
          Friday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
          Saturday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
          Sunday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
        }
    },
    {
        name: 'Rick Roll',
        id: '15003',
        role: 'Key Holder',
        available: {
          Monday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
          Tuesday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
          Wednesday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
          Thursday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
          Friday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
          Saturday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
          Sunday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
        }
    },
    {
        name: 'Sponge Bob',
        id: '15004',
        role: 'Key Holder',
        available: {
          Monday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
          Tuesday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
          Wednesday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
          Thursday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
          Friday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
          Saturday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
          Sunday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
        }
    },
    {
      name: 'Shrek',
      id: '15005',
      role: 'Key Holder',
      available: {
        Monday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
        Tuesday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
        Wednesday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
        Thursday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
        Friday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
        Saturday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
        Sunday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
      }
    },
    {
      name: 'Sherlock Holmes',
      id: '15006',
      role: 'Key Holder',
      available: {
        Monday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
        Tuesday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
        Wednesday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
        Thursday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
        Friday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
        Saturday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
        Sunday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
      }
    },
    {
      name: 'Harry Potter',
      id: '15007',
      role: 'Stylist',
      available: {
        Monday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
        Tuesday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
        Wednesday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
        Thursday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
        Friday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
        Saturday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
        Sunday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
      }
    },
    {
      name: 'Hermione Granger',
      id: '15008',
      role: 'Stylist',
      available: {
        Monday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
        Tuesday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
        Wednesday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
        Thursday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
        Friday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
        Saturday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
        Sunday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
      }
    },
    {
      name: 'Ron Weasley',
      id: '15009',
      role: 'Stylist',
      available: {
        Monday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
        Tuesday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
        Wednesday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
        Thursday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
        Friday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
        Saturday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
        Sunday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
      }
    },
    {
      name: 'Albus Dumbledore',
      id: '15010',
      role: 'Stylist',
      available: {
        Monday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
        Tuesday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
        Wednesday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
        Thursday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
        Friday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
        Saturday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
        Sunday: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', "9:00PM"],
      }
    }

  ]

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


  const generateSchedule = () => {
    const newSchedule = assignShifts(employees, week);
    setSchedule(newSchedule);
  };

  return (
    <div style={styles.container}>
      <NavBar className="navbar" />
        <div style={styles.content}>
          <Button colorScheme={Colours.primary} variant="solid" size="lg" style={{marginBottom: '20px'}} >
            Generate Schedule
          </Button>
          <WeekTable week={week} employees={employees} schedule={schedule} />
        </div>
    </div>
  );
}

export default Schedule;

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colours.secondary,
    height: '100vh',
    width: '100vw',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: Colours.secondary,
    margin: 0,
    flex: 1,
    width: '100vw',
    height: '100%',
    marginTop: '100px',
    marginLeft: '150px',
  }

};