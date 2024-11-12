// import React, { useEffect, useState } from 'react';
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
        <Button text="Signup" onClick={() => navigate('/signup')} />
        <Button text="Login" onClick={() => navigate('/login')} />
      </div>
    </div>
  );
}

export default Header;

const styles = {
    container : {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        padding: '0 20px',
        backgroundColor: Colours.primary,
        textAlign: 'center',
        fontSize: '30px',
        color: 'black',
    },
    title: {
        color: Colours.quaternary,
        fontSize: FontSizes.large,
    },

}
