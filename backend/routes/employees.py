from flask import Blueprint, jsonify, request, abort

# Create a Blueprint for employee routes
employee_bp = Blueprint('employee', __name__)

# Sample data storage (in-memory for demonstration purposes)
employees = []

@employee_bp.route('/employees', methods=['GET'])
def get_employees():
    """Get list of employees"""
    return jsonify(employees), 200

@employee_bp.route('/employees', methods=['POST'])
def add_employee():
    """Add a new employee"""
    if not request.json or 'name' not in request.json:
        abort(400)
    employee = {'id': len(employees) + 1, 'name': request.json['name']}
    employees.append(employee)
    return jsonify(employee), 201

@employee_bp.route('/employees/<int:employee_id>', methods=['GET'])
def get_employee(employee_id):
    """Get a specific employee by ID"""
    employee = next((emp for emp in employees if emp['id'] == employee_id), None)
    if employee is None:
        abort(404)
    return jsonify(employee), 200

@employee_bp.route('/employees/<int:employee_id>', methods=['PUT'])
def update_employee(employee_id):
    """Update an existing employee"""
    employee = next((emp for emp in employees if emp['id'] == employee_id), None)
    if employee is None:
        abort(404)
    if not request.json:
        abort(400)
    employee['name'] = request.json.get('name', employee['name'])
    return jsonify(employee), 200

@employee_bp.route('/employees/<int:employee_id>', methods=['DELETE'])
def delete_employee(employee_id):
    """Delete an employee"""
    global employees
    employees = [emp for emp in employees if emp['id'] != employee_id]
    return jsonify({'result': True}), 204

# You would typically register this blueprint in your main app file
# For example: app.register_blueprint(employee_bp)
