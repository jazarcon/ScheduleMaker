from django.urls import path
from .views import UserRegistrationView, EmployeeViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'employees', EmployeeViewSet)

urlpatterns = [
    path('signup/', UserRegistrationView.as_view(), name='user-signup'),
]

urlpatterns += router.urls