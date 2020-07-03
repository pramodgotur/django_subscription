from datetime import datetime

from django.contrib.auth import authenticate

from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK
from rest_framework.status import HTTP_200_OK, HTTP_403_FORBIDDEN
from rest_framework.authtoken.models import Token

from accounts.models import User


class UserMixin:
    def create_user(self):
        context = {"status": True, "message": "", "data": {}}
        try:
            body_data = self.request.data
            first_name = body_data['first_name']
            last_name = body_data['last_name']
            email = body_data['email']
            password = body_data['password']
            address = body_data['address']
            dob = body_data['dob']
            company = body_data['company']
        except KeyError:
            context["status"] = False
            context["message"] = "Json key error"
            return Response(data=context, status=HTTP_403_FORBIDDEN)

        if User.objects.filter(email=email).exists():
            context["status"] = False
            context["message"] = "Email already exists"
            return Response(data=context, status=HTTP_403_FORBIDDEN)
        user = User()
        user.first_name = first_name
        user.last_name = last_name
        user.email = email
        user.address = address
        user.dob = dob
        user.company = company
        user.set_password(password)
        user.save()
        context["message"] = "User successfully registered."
        return Response(data=context, status=HTTP_200_OK)

    def login_user(self):
        context = {"status": True, "message": "", "data": {}}
        try:
            body_data = self.request.data
            email = body_data['email']
            password = body_data['password']
        except KeyError:
            context["status"] = False
            context["message"] = "Json key error"
            return Response(data=context, status=HTTP_403_FORBIDDEN)
        user = authenticate(email=email, password=password)
        if user:
            token, _ = Token.objects.get_or_create(user=user)
            context["message"] = "Successfully logged in"
            context['data']['token'] = token.key
            return Response(data=context, status=HTTP_200_OK)
        context["status"] = False
        context["message"] = "Invalid credentials"
        return Response(data=context, status=HTTP_403_FORBIDDEN)
