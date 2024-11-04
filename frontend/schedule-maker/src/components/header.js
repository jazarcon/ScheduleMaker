// import React, { useEffect, useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './button';

function Header() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>Schedule Maker</h1>
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
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize: '30px',
        color: 'black',
    },

}
