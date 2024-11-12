import { useState } from "react";

function Availability() {
    // Schedule 
    const hours = [
        "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM", "12AM"
    ];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const [availability, setAvailability] = useState({});
    const [isDragging, setIsDragging] = useState(false);

    const toggleAvailability = (day, hour) => {
        setAvailability(prevAvailability => {
            const newAvailability = { ...prevAvailability };
            if (!newAvailability[day]) {
                newAvailability[day] = [];
            }
            if (newAvailability[day].includes(hour)) {
                newAvailability[day] = newAvailability[day].filter(h => h !== hour);
            } else {
                newAvailability[day].push(hour);
            }
            return newAvailability;
        });
    };

    const handleMouseDown = (day, hour) => {
        setIsDragging(true);
        toggleAvailability(day, hour);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseEnter = (day, hour) => {
        if (isDragging) {
            toggleAvailability(day, hour);
        }
    };

    const clearAvailability = () => {
        setAvailability({});
    };

    return (
        <div onMouseUp={handleMouseUp}>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        {hours.map(hour => (
                            <th key={hour}>{hour}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {days.map(day => (
                        <tr key={day}>
                            <td>{day}</td>
                            {hours.map(hour => (
                                <td
                                    className="table-cell"
                                    key={hour}
                                    onMouseDown={() => handleMouseDown(day, hour)}
                                    onMouseEnter={() => handleMouseEnter(day, hour)}
                                    style={{
                                        backgroundColor: availability[day] && availability[day].includes(hour) ? 'lightgreen' : 'white'
                                    }}
                                ></td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={styles.container}>
                <button onClick={clearAvailability}>Clear Availability</button>
            </div>
        </div>
    );
}

export default Availability;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginTop: '10px',
    },
};