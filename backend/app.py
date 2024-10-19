from flask import Flask, request, jsonify, send_from_directory, render_template_string

app = Flask(__name__, static_folder='../frontend', template_folder='templates')

class Employee:
    def __init__(self, name, availability):
        self.name = name
        self.availability = availability

class Schedule:
    def __init__(self):
        self.schedule = {}

    def add_shift(self, time_slot, employee):
        if time_slot not in self.schedule:
            self.schedule[time_slot] = []
        self.schedule[time_slot].append(employee)

employees = []

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/favicon.ico')
def favicon():
    return send_from_directory(app.static_folder, 'favicon.ico')

@app.route('/css/<path:path>')
def send_css(path):
    return send_from_directory(app.static_folder + '/css', path)

@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory(app.static_folder + '/js', path)

@app.route('/employees', methods=['GET'])
def get_employees():
    return jsonify([{'name': emp.name, 'availability': emp.availability} for emp in employees])

@app.route('/add_employee', methods=['POST'])
def add_employee():
    data = request.json
    name = data['name']
    availability = data['availability']
    new_employee = Employee(name, availability)  # Create an Employee object
    employees.append(new_employee)  # Add the Employee object to the list
    return jsonify({'status': 'success'})

@app.route('/generate_schedule', methods=['GET'])
def generate_schedule():
    global employees  # Explicitly declare employees as global
    schedule = Schedule()
    for employee in employees:
        for time_slot in employee.availability:
            schedule.add_shift(time_slot, employee.name)
    
    table_html = '<table><thead><tr><th>Time Slot</th><th>Employees</th></tr></thead><tbody>'
    for time_slot, employees in schedule.schedule.items():
        table_html += f'<tr><td>{time_slot}</td><td>{", ".join(employees)}</td></tr>'
    table_html += '</tbody></table>'
    
    return render_template_string(table_html)

if __name__ == '__main__':
    app.run(debug=True)