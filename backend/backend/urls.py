from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from . import views
from api_data.views import ProductView,  OrderView, CartView
from rest_framework import routers

# Define the router
router = routers.DefaultRouter()
router.register(r'product', ProductView, basename='productview')
router.register(r'order', OrderView, basename='orderview')
router.register(r'cart', CartView, basename='cartview')

# Combine all urlpatterns
urlpatterns = [
    path('admin/', admin.site.urls),
    path('register', views.UserRegister.as_view(), name='register'),
	path('login', views.UserLogin.as_view(), name='login'),
	path('logout', views.UserLogout.as_view(), name='logout'),
	path('user', views.UserView.as_view(), name='user'),
    path('api/', include(router.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
