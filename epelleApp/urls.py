from django.urls import path
from . import views

urlpatterns = [

path('', views.home, name='home'),
path('a-propos/', views.about, name='about'),
path('histoire/', views.history, name='history'),
path('galerie/', views.gallery, name='gallery'),
path('temoignage/', views.testimonial, name='testimonial'),
path('equipe/', views.team, name='team'),
path('partenaire/', views.partner, name='partner'),
path('contact/', views.contact, name='contact'),

path('galerie/<str:edition>/', views.galerie_edition, name='galerie_edition'),

# ADMIN

path('admin-login/', views.admin_login, name="admin_login"),
path('admin-panel/', views.admin_dashboard, name="admin_dashboard"),
path('admin-panel/contacts/', views.admin_contacts, name="admin_contacts"),
path('admin-panel/partners/', views.admin_partners, name="admin_partners"),
path('admin-panel/contacts/<int:id>/', views.admin_contact_detail, name='admin_contact_detail'),
path('admin-panel/partners/<int:id>/', views.admin_partner_detail, name='admin_partner_detail'),

]