from django.shortcuts import render
from app01.models import *
from django.http import JsonResponse
# Create your views here.
def view_html(request):
    # checking if the request has been sent
    if 'category' in request.GET:
        # filtering data from Transport model by the received category
        list_transport = Transport.objects.filter(category__name=request.GET.get('category'))
        # getting only values
        list_transport = list_transport.values()
        # converting Query set to list
        list_transport = list(list_transport)
        # returning response in json format
        return JsonResponse({'list_transport':list_transport})
    context = {
        "category_list" : Category.objects.all(),
        "transport_list" : Transport.objects.all(),
    }    
    return render(request, 'app01/index.html', context = context)

