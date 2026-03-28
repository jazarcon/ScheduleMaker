from flask import Blueprint
from .employees import employees_bp

def register_routes(app):
    """Register all blueprints"""
    app.register_blueprint(employees_bp)