from django.urls import path
from accounts.views import SignUpView, LoginView

urlpatterns = [
    path("signup/", SignUpView.as_view()),
    path("login/", LoginView.as_view())
]
