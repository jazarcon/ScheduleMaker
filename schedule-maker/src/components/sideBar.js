// src/sideBar.js

import React from 'react';

export default function SideBar() {
    return (
        <div>
            <div className="tab">
                <button className="tablinks" onClick={(event) => openTab(event, 'Employees')}>Employees</button>
                <button className="tablinks" onClick={(event) => openTab(event, 'Schedule')}>Schedule</button>
            </div>
            <div id="Employees" className="tabcontent">
                <h3>Employees</h3>
                <ul id="employeeList"></ul>
                <form id="employeeForm">
                    <label>Name:</label>
                    <input type="text" name="name" />
                    <label>Availability:</label>
                    <input type="text" name="availability" />
                    <button type="submit">Add Employee</button>
                </form>
            </div>
            <div id="Schedule" className="tabcontent">
                <h3>Schedule</h3>
                <button id="generateSchedule">Generate Schedule</button>
                <div id="schedule"></div>
            </div>
        </div>
    );
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.className += ' active';
}