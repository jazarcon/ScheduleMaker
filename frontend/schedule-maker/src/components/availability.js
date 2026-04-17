import { useState } from "react";
import { Cursor } from "react-simple-typewriter";
import Button from "./button";
import { Colours } from "./styles";

const Availability = ({ onAvailabilityChange }) => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const hours = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'];

    const [availability, setAvailability] = useState({});
    const [mouseDown, setMouseDown] = useState(false);

    const handleMouseDown = (day, hour) => {
        setMouseDown(true);
        toggleAvailability(day, hour);
    };

    const handleMouseEnter = (day, hour) => {
        if (mouseDown) {
            toggleAvailability(day, hour);
        }
    };

    const handleMouseUp = () => {
        setMouseDown(false);
    };

    const toggleAvailability = (day, hour) => {
        setAvailability(prevAvailability => {
            const dayAvailability = prevAvailability[day] || [];
            let newDayAvailability;
            if (dayAvailability.includes(hour)) {
                newDayAvailability = dayAvailability.filter(h => h !== hour);
            } else {
                newDayAvailability = [...dayAvailability, hour];
            }
            const newAvailability = {
                ...prevAvailability,
                [day]: newDayAvailability,
            };
            if (onAvailabilityChange) {
                onAvailabilityChange(newAvailability);
            }
            return newAvailability;
        });
    };

    const clearAvailability = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        setAvailability({});
    };

    return (
        <div onMouseUp={handleMouseUp} style={styles.tableContainer}>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.headerCell}></th>
                        {days.map(day => (
                            <th key={day} style={styles.headerCell}>{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {hours.map(hour => (
                        <tr key={hour}>
                            <td style={styles.hourCell}>{hour}</td>
                            {days.map(day => (
                                <td
                                    className="table-cell"
                                    key={`${day}-${hour}`}
                                    onMouseDown={() => handleMouseDown(day, hour)}
                                    onMouseEnter={() => handleMouseEnter(day, hour)}
                                    style={{
                                        ...styles.availabilityCell,
                                        backgroundColor: availability[day]?.includes(hour) ? Colours.teritary : 'white',
                                    }}
                                    onClick={() => toggleAvailability(day, hour)}
                                ></td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={styles.container}>
                <Button text="Clear Availability" onClick={clearAvailability} />
            </div>
        </div>
    );
};

export default Availability;

const styles = {
    tableContainer: {
        overflowX: 'auto',
        width: '100%',
        maxWidth: '1200px', // Adjust as needed to fit all days
    },
    table: {
        width: '100%',
        tableLayout: 'fixed',
        borderCollapse: 'collapse',
        margin: '0 auto',
    },
    headerCell: {
        width: '120px', // Fixed width for each day column
        height: '40px',
        textAlign: 'center',
        fontWeight: 'bold',
        // border: '1px solid #ddd',
        backgroundColor: Colours.primary,
        color: 'white',
    },
    hourCell: {
        width: '80px', // Fixed width for hour column
        height: '30px',
        textAlign: 'center',
        fontWeight: 'bold',
        border: 'black 1px solid',
        backgroundColor: Colours.secondary,
        color: 'white',
    },
    availabilityCell: {
        width: '120px', // Same as headerCell
        height: '30px',
        border: 'black 1px solid',
        cursor: 'pointer',
        textAlign: 'center',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginTop: '10px',
    },
};