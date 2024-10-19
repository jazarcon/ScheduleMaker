// JavaScript

document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const availability = document.getElementById('availability').value.split(',');

    fetch('/add_employee', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, availability }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        document.getElementById('employeeForm').reset();
        loadEmployees(); // Reload employees after adding a new one
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

document.getElementById('generateSchedule').addEventListener('click', function() {
    fetch('/generate_schedule')
    .then(response => response.text())
    .then(data => {
        const scheduleDiv = document.getElementById('schedule');
        scheduleDiv.innerHTML = data;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

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
    if (tabName === 'Employees') {
        loadEmployees();
    }
}

// Open the default tab
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.tablinks').click();
});

function loadEmployees() {
    fetch('/employees')
    .then(response => response.json())
    .then(data => {
        const employeeList = document.getElementById('employeeList');
        employeeList.innerHTML = '';
        data.forEach(employee => {
            const li = document.createElement('li');
            li.textContent = `${employee.name} - Availability: ${employee.availability.join(', ')}`;
            employeeList.appendChild(li);
        });
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}