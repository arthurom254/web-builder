from django.db import models


class WebUser(models.Model):
    user_token=models.CharField(max_length=100)
    
    def __str__(self):
        return self.user_token
    
class WebProject(models.Model):
    user=models.ForeignKey(WebUser, on_delete=models.DO_NOTHING)
    name=models.CharField(max_length=200)
    backup=models.CharField(max_length=100, default='1')
    project=models.TextField(max_length=10000000)

    def __str__(self):
        return f"P-{self.name} "