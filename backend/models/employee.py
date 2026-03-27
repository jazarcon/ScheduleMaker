class Employee:
    def __init__(self, id, name, position, department):
        self.id = id
        self.name = name
        self.position = position
        self.department = department

    def __repr__(self):
        return f"Employee(id={self.id}, name='{self.name}', position='{self.position}', department='{self.department}')"