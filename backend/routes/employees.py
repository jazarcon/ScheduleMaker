from flask import Blueprint, request, jsonify
from backend.services import EmployeeService
from backend.utils.validators import validate_employee_data

employees_bp = Blueprint('employees', __name__, url_prefix='/api/employees')

@employees_bp.route('', methods=['GET'])
def get_all_employees():
    """Get all employees"""
    try:
        employees = EmployeeService.get_all_employees()
        return jsonify([emp.to_dict() for emp in employees]), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@employees_bp.route('/<employee_id>', methods=['GET'])
def get_employee(employee_id):
    """Get a specific employee"""
    try:
        employee = EmployeeService.get_employee_by_id(employee_id)
        if not employee:
            return jsonify({'error': 'Employee not found'}), 404
        return jsonify(employee.to_dict()), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@employees_bp.route('', methods=['POST'])
def create_employee():
    """Create a new employee"""
    data = request.get_json()
    
    # Validate input
    errors = validate_employee_data(data)
    if errors:
        return jsonify({'error': 'Validation failed', 'details': errors}), 400
    
    try:
        employee = EmployeeService.create_employee(data)
        return jsonify(employee.to_dict()), 201
    except ValueError as e:
        return jsonify({'error': str(e)}), 409
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@employees_bp.route('/<employee_id>', methods=['PUT'])
def update_employee(employee_id):
    """Update an employee"""
    data = request.get_json()
    
    # Validate input (partial validation for updates)
    if data.get('role'):
        valid_roles = ['manager', 'assistant', 'key holder', 'stylist']
        if data.get('role').lower() not in valid_roles:
            return jsonify({'error': f"role must be one of: {', '.join(valid_roles)}"}), 400
    
    try:
        employee = EmployeeService.update_employee(employee_id, data)
        return jsonify(employee.to_dict()), 200
    except ValueError as e:
        return jsonify({'error': str(e)}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@employees_bp.route('/<employee_id>', methods=['DELETE'])
def delete_employee(employee_id):
    """Delete an employee"""
    try:
        EmployeeService.delete_employee(employee_id)
        return jsonify({'message': 'Employee deleted successfully'}), 200
    except ValueError as e:
        return jsonify({'error': str(e)}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500