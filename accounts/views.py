from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from accounts.core.user_helper import UserMixin


class SignUpView(UserMixin, APIView):
    def post(self, request):
        return self.create_user()


class LoginView(UserMixin, APIView):
    def post(self, request):
        return self.login_user()
