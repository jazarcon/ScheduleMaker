def validate_employee_data(data):
    """Validate employee input data"""
    errors = []
    
    if not data.get('name') or not isinstance(data.get('name'), str):
        errors.append('name is required and must be a string')
    
    if not data.get('id') or not isinstance(data.get('id'), str):
        errors.append('id is required and must be a string')
    
    if not data.get('role') or not isinstance(data.get('role'), str):
        errors.append('role is required and must be a string')
    
    valid_roles = ['manager', 'assistant', 'key holder', 'stylist']
    if data.get('role') and data.get('role').lower() not in valid_roles:
        errors.append(f"role must be one of: {', '.join(valid_roles)}")
    
    return errors