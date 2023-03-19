from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings
from sendproject.settings import EMAIL_HOST_USER
# Create your views here.

def view_page(request):
    if request.method == "POST":
        topic = request.POST.get('topic')
        message = request.POST.get('message')
        recipient = request.POST.get('recipient')        
        recipient_list = [recipient]

        send_mail(
            topic,
            message,
            EMAIL_HOST_USER,
            recipient_list,
            fail_silently=False
        )

    return render(request, 'app1/index.html')
