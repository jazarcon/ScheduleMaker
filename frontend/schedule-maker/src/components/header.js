import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './button';
import { Colours, FontSizes, Spacing } from './styles';

function Header() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Schedule Maker</h1>
        <div style={styles.buttons}>
          <Button text="Signup" onClick={() => navigate('/signup')} />
          <Button text="Login" onClick={() => navigate('/login')} />
        </div>
      </div>
    </div>
  );
}

export default Header;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: 'none',
    height: '100px', // Adjust this value based on your design
    width: '100%',
    position: 'fixed',
    top: 0,
    zIndex: 1000,
    backgroundColor: Colours.primary,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: '0 20px',
    textAlign: 'center',
    fontSize: '30px',
    color: 'black',
    border: 'none',
    position: 'relative',
  },
  title: {
    color: Colours.quaternary,
    fontSize: FontSizes.large,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
    bottom: '10px',
    right: '20px',
  },
};