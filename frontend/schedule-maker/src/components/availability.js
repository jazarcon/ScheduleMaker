import { useState } from "react";
import { Cursor } from "react-simple-typewriter";
import Button from "./button";
import { Colours } from "./styles";

const Availability = () => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const hours = ['8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM', '12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM'];

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
            if (dayAvailability.includes(hour)) {
                return {
                    ...prevAvailability,
                    [day]: dayAvailability.filter(h => h !== hour),
                };
            } else {
                return {
                    ...prevAvailability,
                    [day]: [...dayAvailability, hour],
                };
            }
        });
    };

    const clearAvailability = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        setAvailability({});
    };

    return (
        <div onMouseUp={handleMouseUp}>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        {days.map(day => (
                            <th key={day}>{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {hours.map(hour => (
                        <tr key={hour}>
                            <td>{hour}</td>
                            {days.map(day => (
                                <td
                                    className="table-cell"
                                    key={`${day}-${hour}`}
                                    onMouseDown={() => handleMouseDown(day, hour)}
                                    onMouseEnter={() => handleMouseEnter(day, hour)}
                                    style={{
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
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginTop: '10px',
    },
};