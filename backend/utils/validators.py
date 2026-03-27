def validate_employee_data(employee):
    """
    Validate employee data before processing.
    """
    errors = []

    if not employee.get('name'):
        errors.append('Name is required.')

    if not employee.get('email') or '@' not in employee['email']:
        errors.append('Valid email is required.')

    if not employee.get('age') or not (18 <= employee['age'] <= 65):
        errors.append('Age must be between 18 and 65.')

    if not employee.get('department'):
        errors.append('Department is required.')

    return errors
