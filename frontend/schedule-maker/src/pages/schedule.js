import React from 'react';
import Availability from '../components/availability';
import NavBar from '../components/navBar';

function Schedule() {
  return (
    <div className="employee-container">
    <NavBar className="navbar" />
    <div className="main-content">
        <h1>Availability</h1>
        <Availability />
    </div>
    </div>
  );
}

export default Schedule;