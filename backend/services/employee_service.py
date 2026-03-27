class EmployeeService:
    def __init__(self):
        self.employees = []

    def add_employee(self, employee):
        self.employees.append(employee)
        return f'Employee {employee["name"]} added successfully.'

    def get_employee(self, employee_id):
        for emp in self.employees:
            if emp['id'] == employee_id:
                return emp
        return 'Employee not found.'

    def list_employees(self):
        return self.employees

    def remove_employee(self, employee_id):
        for emp in self.employees:
            if emp['id'] == employee_id:
                self.employees.remove(emp)
                return f'Employee {emp["name"]} removed successfully.'
        return 'Employee not found.'
