
from .models import WebProject, WebUser
from rest_framework import serializers


class WebProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model=WebProject
        fields='__all__'

class WebUserSerializer(serializers.ModelSerializer):
    class Meta:
        model=WebUser
        fields='__all__'