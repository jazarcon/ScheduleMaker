// import React, { useEffect, useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './button';
import { Colours, FontSizes } from './styles';

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
    //height: '10vh',
    flexDirection: 'column',
    alignItems: 'center',
    border: 'none',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100hw',
    padding: '0 10px',
    backgroundColor: Colours.primary,
    textAlign: 'center',
    fontSize: '30px',
    color: 'black',
    border: 'none', 
    position: 'fixed',
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

}
