from backend.models import db, Employee

class EmployeeService:
    """Service layer for employee operations"""
    
    @staticmethod
    def get_all_employees():
        """Retrieve all employees"""
        return Employee.query.all()
    
    @staticmethod
    def get_employee_by_id(employee_id):
        """Get a specific employee"""
        return Employee.query.filter_by(id=employee_id).first()
    
    @staticmethod
    def create_employee(emp_data):
        """Create a new employee"""
        # Check if employee already exists
        if Employee.query.filter_by(id=emp_data['id']).first():
            raise ValueError(f"Employee ID {emp_data['id']} already exists")
        
        employee = Employee(
            id=emp_data['id'],
            name=emp_data['name'],
            role=emp_data['role']
        )
        db.session.add(employee)
        db.session.commit()
        return employee
    
    @staticmethod
    def update_employee(employee_id, emp_data):
        """Update an existing employee"""
        employee = Employee.query.filter_by(id=employee_id).first()
        if not employee:
            raise ValueError(f"Employee {employee_id} not found")
        
        employee.name = emp_data.get('name', employee.name)
        employee.role = emp_data.get('role', employee.role)
        db.session.commit()
        return employee
    
    @staticmethod
    def delete_employee(employee_id):
        """Delete an employee"""
        employee = Employee.query.filter_by(id=employee_id).first()
        if not employee:
            raise ValueError(f"Employee {employee_id} not found")
        
        db.session.delete(employee)
        db.session.commit()
    
    @staticmethod
    def employee_exists(employee_id):
        """Check if employee exists"""
        return Employee.query.filter_by(id=employee_id).first() is not None