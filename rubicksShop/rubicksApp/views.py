from django.shortcuts import render
from .models import Product

# Create your views here.
def catalog(request):
	context = {
		'products': Product.objects.all()
	}

	response = render(request, 'rubicksApp/catalog.html', context)

	if 'productId' in request.POST:
		productIdList = list(request.POST['productId'])
		productAmountList = list(request.POST['productAmount'])
		
		productId = ''
		productAmount = ''

		for i in productAmountList:
			productAmount += i
		for i in productIdList:
			productId += i
		

		if 'products_id' in request.COOKIES:
			old_cookies = request.COOKIES['products_id']
			cookies_list = old_cookies.split(' ')

			for cookie in cookies_list:
				if productId not in cookie:
					pass
				else:
					cookies_list.remove(cookie)
					old_cookies = ' '.join(cookies_list)
			
			if old_cookies != '':
				old_cookies += ' ' + productId + '!' + productAmount
			else:
				old_cookies += productId + '!' + productAmount
			response.set_cookie('products_id', old_cookies)
		else:
			response.set_cookie('products_id', productId + '!' + productAmount)

	return response

def cart(request):

	if 'products_id' in request.COOKIES:
		products_id = request.COOKIES["products_id"]

		list_of_info = products_id.split(' ')
		list_of_id = []
		list_of_amounts = []
		id = ''

		for elem in list_of_info:
			elem_list = elem.split('!')
			for number in elem_list[0]:
				if number != '$':
					id += number
			list_of_id.append(id)
			list_of_amounts.append(elem_list[1])
			id = ''

		context = {
			'products': list(Product.objects.filter(pk__in = list_of_id)),
			'amounts': list_of_amounts
		}
	else:
		context = {
			'products': [],
		}

	response = render(request, 'rubicksApp/cart.html', context)


	if 'productId' in request.POST:
		productIdList = list(request.POST['productId'])
		
		productId = ''

		for i in productIdList:
			productId += i

		old_cookies = request.COOKIES['products_id']

		cookies_list = old_cookies.split(' ')

		for cookie in cookies_list:
			if productId in cookie:
				cookies_list.remove(cookie)
				old_cookies = ' '.join(cookies_list)

		if old_cookies != '':
			response.set_cookie('products_id', old_cookies)
		else:
			response.delete_cookie('products_id')

	return response