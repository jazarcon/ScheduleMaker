import React from 'react';
import Availability from '../components/availability';
import Header from '../components/header';
import NavBar from '../components/navBar';

function Employee() {
  return (
    <div>
      <Header />
      <div className="employee-container">
        <NavBar className="navbar" />
        <div className="main-content">
          <h1>Availability</h1>
          <Availability />
        </div>
      </div>
    </div>
  );
}

export default Employee;