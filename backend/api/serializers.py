from rest_framework import serializers
from .models import Post, CustomUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ["id", "username", "password", "email"]
        extra_kwargs = {"password": {"write_only" : True}}

    def create(self, validated_data):
        user = CustomUser.objects.create_user(**validated_data)
        return user
    
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ["id", "author", "title", "link", "text"]
        extra_kwargs = {"author": {"read_only": True}}