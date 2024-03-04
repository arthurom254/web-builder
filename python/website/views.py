from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from .models import WebProject, WebUser
from .serializers import WebProjectSerializer, WebUserSerializer
from rest_framework.views import APIView
import uuid 
class NewUser(APIView):
    def post(self, request):
        try:
            t=WebUser.objects.get(user_token=request.data.get('user_token'))
        except:
            t=WebUser.objects.create(user_token=str(uuid.uuid4()))
        data=WebUserSerializer(t).data
        return Response(status=status.HTTP_200_OK, data=data)

class NewProject(APIView):
    def post(self, request):
        rdata=request.data
        try:
            name=rdata.get('name')
            user_token=rdata.get('user_token')
            user=WebUser.objects.get(user_token=user_token)
            q=WebProject.objects.create(name=name, user=user, backup=user_token)
            data=WebProjectSerializer(q).data
            return Response(status=status.HTTP_200_OK, data=data)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST, data={})


class MyProjectsView(APIView):
    def post(self, request):
        rdata=request.data
        print(rdata)
        user=WebUser.objects.get(user_token=rdata.get('user_token'))
        q=WebProject.objects.filter(user=user).order_by('-id')
        data=WebProjectSerializer(q, many=True).data
        return Response(status=status.HTTP_200_OK, data=data)
    
class OpenCurrentProject(APIView):
    def post(self, request):
        rdata=request.data
        user=WebUser.objects.get(user_token=rdata.get('user_token'))
        q=WebProject.objects.get(user=user, id=rdata.get('id'))
        q.project=rdata.get('projectfiles')
        q.save()
        data=WebProjectSerializer(q).data
        return Response(status=status.HTTP_200_OK, data=data)


