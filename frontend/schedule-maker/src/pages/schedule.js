import React from 'react';
import Availability from '../components/availability';
import NavBar from '../components/navBar';
import { Colours } from '../components/styles';

function Schedule() {
  return (
    <div style={styles.container}>
      <NavBar className="navbar" />
      <div className="main-content">
        <h1>Schedule</h1>
        
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
    backgroundColor: Colours.quaternary,
    height: '100vh',
    width: '100%',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
  },
  input: {
    margin: '10px',
    padding: '10px',
    fontSize: '1.5em',
  },
  title: {
    fontSize: '2em',
    marginBottom: '20px',
  },
};