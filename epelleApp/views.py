from django.shortcuts import render


# Create your views here.
from django.shortcuts import render


def home(request):
    return render(request, "clients/home.html")


def about(request):
    return render(request, "clients/about.html")


def history(request):
    return render(request, "clients/history.html")




def testimonial(request):
    return render(request, "clients/testimonial.html")


def team(request):
    return render(request, "clients/team.html")


from .models import Partner
from django.shortcuts import render

def partner(request):

    if request.method == "POST":
        organization = request.POST.get("organization")
        email = request.POST.get("email")
        phone = request.POST.get("phone")  # ✅
        message = request.POST.get("message")

        Partner.objects.create(
            organization=organization,
            email=email,
            phone=phone,  # ✅
            message=message
        )

        return render(request, "clients/partner.html", {"success": True})

    return render(request, "clients/partner.html")



from django.shortcuts import render, redirect
from .models import Contact

def contact(request):

    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        phone = request.POST.get("phone")  # ✅
        message = request.POST.get("message")

        Contact.objects.create(
            name=name,
            email=email,
            phone=phone,  # ✅
            message=message
        )

        return render(request, "clients/contact.html", {"success": True})

    return render(request, "clients/contact.html")



import os
from django.conf import settings
from django.shortcuts import render


def gallery(request):

    gallery_root = os.path.join(settings.BASE_DIR, "epelleApp", "static", "images", "gallery")

    editions = []

    if os.path.isdir(gallery_root):

        for folder in os.listdir(gallery_root):

            folder_path = os.path.join(gallery_root, folder)

            if os.path.isdir(folder_path):

                images = os.listdir(folder_path)

                if images:
                    editions.append({
                        "name": folder,
                        "cover": images[0]
                    })

    return render(request, "clients/gallery.html", {"editions": editions})




# PAGE ALBUM (photos d'une édition)

import os
from django.conf import settings
from django.shortcuts import render


def galerie_edition(request, edition):

    folder_path = os.path.join(
        settings.BASE_DIR,
        "epelleApp",
        "static",
        "images",
        "gallery",
        edition
    )

    images = []

    if os.path.isdir(folder_path):

        for file in os.listdir(folder_path):

            if file.lower().endswith((".jpg", ".jpeg", ".png", ".webp")):
                images.append(file)

    images.sort()

    context = {
        "edition": edition,
        "images": images
    }

    return render(request, "clients/galerie_edition.html", context)

from django.contrib.auth.decorators import login_required

from django.shortcuts import render
from .models import Contact, Partner

@login_required
def admin_dashboard(request):

    contacts_count = Contact.objects.count()
    partners_count = Partner.objects.count()

    context = {
        "contacts_count": contacts_count,
        "partners_count": partners_count
    }

    return render(request,"admin-panel/dashboard.html",context)

@login_required
def admin_contacts(request):

    contacts = Contact.objects.all().order_by("-id")

    return render(request,"admin-panel/contacts.html",{
        "contacts":contacts
    })

@login_required
def admin_partners(request):

    partners = Partner.objects.all().order_by("-id")

    return render(request,"admin-panel/partenaires.html",{
        "partners":partners
    })


from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect


def admin_login(request):

    if request.method == "POST":

        username = request.POST["username"]
        password = request.POST["password"]

        user = authenticate(request, username=username, password=password)

        if user is not None:

            login(request, user)

            return redirect("admin_dashboard")

    return render(request,"admin-panel/login.html")



def admin_contact_detail(request, id):
    contact = Contact.objects.get(id=id)
    return render(request, "admin-panel/contact_detail.html", {"contact": contact})

def admin_partner_detail(request, id):
    partner = Partner.objects.get(id=id)
    return render(request, "admin-panel/partner_detail.html", {"partner": partner})