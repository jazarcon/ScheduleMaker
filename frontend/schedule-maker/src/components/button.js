import { Colours } from "./styles";

export default function Button({ text, onClick }) {
    return (
        <button 
            style={styles.button}
            onClick={onClick}>{text}</button>
    );
} 

const styles = {
    button: {
        backgroundColor: Colours.teritary, // Ensure the color key is correct
        color: Colours.quinary,
        fontSize: '16px',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};