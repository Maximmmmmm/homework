from django.shortcuts import render
from django.http import HttpResponse
from app1.models import Product



def view_main_page (request):
    context = {
        'product_list': Product.objects.all(),
    }
    response = render(request, 'main.html', context)

    if request.method == "POST":
        id_product = request.POST.get('go_to_basket')

        if 'id_products' in request.COOKIES:
            old_cookie = request.COOKIES["id_products"]

            if id_product not in old_cookie:
                old_cookie += ' ' + id_product
                response.set_cookie("id_products", old_cookie)
        else:
            response.set_cookie('id_products', id_product)

    return response


def view_basket (request):
    if 'id_products' in request.COOKIES:
        id_product = request.COOKIES["id_products"]

        list_of_id = id_product.split(' ')

        context = {
            'product_list': list(Product.objects.filter(pk__in = list_of_id)),
        }
    else:
        context = {
            'product_list': [],
        }

    response = render(request, 'basket.html', context)

    if request.method == "POST":
        id_basket = request.POST.get('go_into_basket')

        if 'id_products' in request.COOKIES:
            if id_basket in request.COOKIES['id_products']:
                id_product = request.COOKIES["id_products"]
                list_of_id = id_product.split(' ')
    
                list_of_id.remove(id_basket)
    
                if list_of_id != []:
                    cookie_value = ' '
                    cookie_value = cookie_value.join(list_of_id)
                    response.set_cookie('id_products', cookie_value)
                else:
                    response.delete_cookie('id_products')

    return response
